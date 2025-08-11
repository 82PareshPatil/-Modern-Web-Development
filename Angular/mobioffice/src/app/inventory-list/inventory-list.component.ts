// apps/mobi-fix-pro-ui/src/app/master/inventory/inventory-list.component.ts
import { Component, OnInit, TemplateRef, ViewChild, inject } from "@angular/core";
import { UnSubscriber, SideNavService } from "@mobi-office-ui"; // keep repo conventions
import { LeaveRow } from "./inventory.models";

/**
 * Inventory / Leave Summary Component
 * - Dummy data inside component for easy testing
 * - Filters: dept, employee, date range, search
 * - Segment toggles: summary / dept / emp / monthly / custom
 * - CSV export of current visible rows
 */
@Component({
  selector: "mobi-leave-summary",
  templateUrl: "./inventory-list.component.html",
  styleUrls: ["./inventory-list.component.scss"],
  standalone: false,
})
export class InventoryListComponent extends UnSubscriber implements OnInit {
  // services (SideNav used for drawer; other services can be injected similarly if needed)
  private readonly sideNavService = inject(SideNavService);

  @ViewChild("drawerTemplate") drawerTemplate!: TemplateRef<any>;

  // UI state
  public searchQ = "";
  public selectedDept = "";
  public selectedEmp = "";
  public startDate = "";
  public endDate = "";
  public selectedSegment: "summary" | "dept" | "emp" | "monthly" | "custom" = "summary";

  // data
  public allRows: LeaveRow[] = [];
  public visibleRows: LeaveRow[] = [];
  public departments: string[] = [];
  public employees: string[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.populateDummy();
    this.initFilters();
    this.applyFilters();
  }

  // ---------------- dummy data ----------------
  private populateDummy() {
    const names = [
      "Alok Tiwari",
      "Neha Shah",
      "Ravi Mehta",
      "Pooja Desai",
      "Suresh Kumar",
      "Anjali Singh",
      "Rajesh Gupta",
      "Sneha Rao",
      "Karan Verma",
      "Meera Joshi",
      "Vikram Bhatia",
      "Aditi Mehta",
      "Nitin Sharma",
      "Riya Malhotra",
      "Ajay Ram",
      "Tanvi Sharma",
      "Mohit Singh",
      "Komal Jain",
      "Puneet Ops",
    ];
    const depts = [
      "HR",
      "Finance",
      "IT",
      "Marketing",
      "Sales",
      "Operations",
      "Legal",
      "Research",
      "Design",
      "Customer Support",
      "Product",
      "Content",
      "IT Support",
    ];

    const rows: LeaveRow[] = [];
    for (let i = 0; i < 24; i++) {
      const name = names[i % names.length] + (i >= names.length ? " " + Math.floor(i / names.length) : "");
      const department = depts[i % depts.length];
      const opening = Math.floor(Math.random() * 18) + 1;
      const debit = Math.floor(Math.random() * 6);
      const credit = Math.floor(Math.random() * 3);
      const balance = opening - debit + credit;
      // random date in April 2025
      const day = 1 + Math.floor(Math.random() * 28);
      const date = `2025-04-${String(day).padStart(2, "0")}`;

      rows.push({
        empCode: String(1 + i).padStart(3, "0"),
        name,
        department,
        opening,
        debit,
        credit,
        balance,
        date,
      });
    }

    this.allRows = rows;
  }

  // ---------------- filters / lists ----------------
  private initFilters() {
    const deptSet = new Set(this.allRows.map((r) => r.department));
    this.departments = Array.from(deptSet);
    this.employees = this.allRows.map((r) => r.name);
    // default dates
    const dates = this.allRows.map((r) => new Date(r.date)).sort((a, b) => a.getTime() - b.getTime());
    if (dates.length) {
      this.startDate = dates[0].toISOString().slice(0, 10);
      this.endDate = dates[dates.length - 1].toISOString().slice(0, 10);
    }
  }

  // ---------------- filtering / views ----------------
  public applyFilters() {
    const q = this.searchQ.trim().toLowerCase();
    const s = this.startDate ? new Date(this.startDate) : null;
    const e = this.endDate ? new Date(this.endDate + "T23:59:59") : null;

    let filtered = this.allRows.filter((r) => {
      if (this.selectedDept && r.department !== this.selectedDept) return false;
      if (this.selectedEmp && r.name !== this.selectedEmp) return false;
      if (q && !(r.name.toLowerCase().includes(q) || r.department.toLowerCase().includes(q) || r.empCode.includes(q)))
        return false;
      if (s && new Date(r.date) < s) return false;
      if (e && new Date(r.date) > e) return false;
      return true;
    });

    // segmented behavior
    if (this.selectedSegment === "dept") {
      const map = new Map<string, { department: string; opening: number; debit: number; credit: number; balance: number }>();
      filtered.forEach((r) => {
        const key = r.department;
        if (!map.has(key)) map.set(key, { department: key, opening: 0, debit: 0, credit: 0, balance: 0 });
        const m = map.get(key)!;
        m.opening += r.opening;
        m.debit += r.debit;
        m.credit += r.credit;
        m.balance += r.balance;
      });
      const arr: LeaveRow[] = Array.from(map.values()).map((m, i) => ({
        empCode: `---`,
        name: m.department,
        department: m.department,
        opening: m.opening,
        debit: m.debit,
        credit: m.credit,
        balance: m.balance,
        date: "",
      }));
      this.visibleRows = arr;
    } else if (this.selectedSegment === "monthly") {
      const total = filtered.reduce(
        (acc, r) => {
          acc.opening += r.opening;
          acc.debit += r.debit;
          acc.credit += r.credit;
          acc.balance += r.balance;
          return acc;
        },
        { opening: 0, debit: 0, credit: 0, balance: 0 }
      );
      this.visibleRows = [
        {
          empCode: `---`,
          name: "Monthly Totals",
          department: "All",
          opening: total.opening,
          debit: total.debit,
          credit: total.credit,
          balance: total.balance,
          date: "",
        },
      ];
    } else if (this.selectedSegment === "custom") {
      // show only negative balances as an example
      filtered = filtered.filter((r) => r.balance < 0);
      this.visibleRows = filtered;
    } else {
      // summary or emp
      if (this.selectedSegment === "emp") {
        filtered = filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
      }
      this.visibleRows = filtered;
    }
  }

  public onDeptChange() {
    // limit employee dropdown based on dept
    if (this.selectedDept) {
      this.employees = this.allRows.filter((r) => r.department === this.selectedDept).map((r) => r.name);
    } else {
      this.employees = this.allRows.map((r) => r.name);
    }
    this.selectedEmp = "";
    this.applyFilters();
  }

  public onSearch(q: string) {
    this.searchQ = q;
    this.applyFilters();
  }

  public changeSegment(seg: InventoryListComponent["selectedSegment"]) {
    this.selectedSegment = seg;
    this.applyFilters();
  }

  public exportCSV() {
    const rows = [["Emp Code", "Name", "Department", "Opening", "Debit", "Credit", "Balance"]];
    this.visibleRows.forEach((r) => {
      rows.push([r.empCode, r.name, r.department, String(r.opening), String(r.debit), String(r.credit), String(r.balance)]);
    });
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leave_summary.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  // open drawer (uses repo SideNavService)
  public onAddEntry() {
    this.sideNavService.open(this.drawerTemplate);
  }
  public onCloseDrawer(isSubmitted: boolean) {
    this.sideNavService.close();
    if (isSubmitted) {
      // if data changed re-fetch / reapply
      this.applyFilters();
    }
  }

  public trackByCode(index: number, item: LeaveRow) {
    return item.empCode + "-" + index;
  }

  // a simple column sort helper (toggle asc/desc for a key)
  private sortKey = "";
  private sortOrder: "asc" | "desc" = "asc";
  public onSort(key: keyof LeaveRow) {
    if (this.sortKey === key) this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    else {
      this.sortKey = String(key);
      this.sortOrder = "asc";
    }
    const dir = this.sortOrder === "asc" ? 1 : -1;
    this.visibleRows = this.visibleRows.slice().sort((a: any, b: any) => {
      const va = a[key] ?? "";
      const vb = b[key] ?? "";
      if (typeof va === "number" && typeof vb === "number") return (va - vb) * dir;
      return String(va).localeCompare(String(vb)) * dir;
    });
  }
}
