import { Component, inject, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogService, RightsService, UnSubscriber, GlobalService as MainGlobalService, SideNavService, Int_Menu_Items, MasterService as MainMasterService } from "@mobi-office-ui";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { GeneralizedFunctionality, GlobalService, MasterService } from "../../services";
import { Int_AssetMaster } from "../../models";
import { trigger, state, style, transition, animate } from "@angular/animations";

enum ACTION_IDs {
  ADD_ASSET = 1,
  UPDATE_ASSET = 2,
  DELETE_ASSET = 3,
}

const ACTION_OPTIONS: Int_Menu_Items[] = [
  {
    ID: ACTION_IDs.ADD_ASSET,
    Name: "Add Asset",
    InnerHtml: "",
    Image: "",
    iCount: "",
    isSelected: false,
  },
  {
    ID: ACTION_IDs.UPDATE_ASSET,
    Name: "Edit Asset",
    InnerHtml: "",
    Image: "",
    iCount: "",
    isSelected: false,
  },
  {
    ID: ACTION_IDs.DELETE_ASSET,
    Name: "Delete Asset",
    InnerHtml: "",
    Image: "",
    iCount: "",
    isSelected: false,
  },
];

@Component({
  templateUrl: "./asset.component.html",
  styleUrl: "./asset.component.scss",
  animations: [
    trigger("indicatorRotate", [
      state("collapsed", style({ transform: "rotate(0deg)" })),
      state("expanded", style({ transform: "rotate(180deg)" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4,0.0,0.2,1)")),
    ]),
  ],
  standalone: false,
})
export class AssetComponent extends UnSubscriber implements OnInit {
  private readonly store = inject(Store);
  private readonly toastr = inject(ToastrService);
  private readonly mainGlobalService = inject(MainGlobalService);
  private readonly dialogService = inject(DialogService);
  private readonly globalService = inject(GlobalService);
  private readonly dialog = inject(MatDialog);
  public readonly rightsService = inject(RightsService);
  public readonly masterService = inject(MasterService);
  private readonly mainMasterService = inject(MainMasterService);
  public readonly sideNavService = inject(SideNavService);

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.getAssets();
  }

  @ViewChild("assetDrawerTemplate") assetDrawerTemplate!: TemplateRef<any>;
  mainList: Int_AssetMaster[] = [];
  currentSelectedAsset: Int_AssetMaster = {
    ChildList: [],
    isParent: false,
    isExpanded: false,
    ID: 0,
    Name: "",
    ParentAssetID: 0,
    CID: 0,
    AssetTypeID: 0,
    LocationID: 0,
    Model: "",
    PurchaseDate: "",
    ShortCode: "",

    //
    fullParentPath: "",
  };
  actionOptions: Int_Menu_Items[] = [];
  selectedActionID: number = 0;

  private getAssets() {
    this.anotherSubscription = this.mainMasterService.GetAssetMasterByCID().subscribe((res: any) => {
      const { Table } = res;
      this.mainList = GeneralizedFunctionality.generateRecursion(Table, "ID", "ParentAssetID");
      GeneralizedFunctionality.addTreeDepth(this.mainList, 1);
    });
  }

  onOpenActions(templateItem: Int_AssetMaster) {
    const canAdd = this.rightsService.rightsControl.canAdd;
    const canEdit = this.rightsService.rightsControl.canEdit;
    const canDelete = this.rightsService.rightsControl.canDelete;

    this.actionOptions = ACTION_OPTIONS.filter((el: Int_Menu_Items) => {
      switch (el.ID) {
        case ACTION_IDs.ADD_ASSET:
          return canAdd;
        case ACTION_IDs.UPDATE_ASSET:
          return canEdit;
        case ACTION_IDs.DELETE_ASSET:
          if (canDelete) {
            return !templateItem.isParent;
          } else {
            return false;
          }
        default:
          return false;
      }
    });
  }

  onSelectAction(item: Int_AssetMaster) {
    switch (this.selectedActionID) {
      case ACTION_IDs.ADD_ASSET:
        this.onAddAsset(0, item.ID);
        break;
      case ACTION_IDs.UPDATE_ASSET:
        this.onAddAsset(item.ID, item.ParentAssetID);
        break;
      case ACTION_IDs.DELETE_ASSET:
        this.dialogService.confirmationDialog(
          `Are you sure you want to delete this location?`,
          "Confirmation",
          "Delete",
          "Cancel",
          () => {
            this.anotherSubscription = this.masterService.DeleteAssetMaster(item.ID).subscribe((res: any) => {
              this.toastr.success(res.message, "Success");
              this.getAssets();
            });
          },
          () => {}
        );
        break;
      default:
    }
    this.selectedActionID = 0;
  }

  onAddAsset(ID: number = 0, ParentAssetID: number = 0): void {
    this.currentSelectedAsset.ID = ID;
    this.currentSelectedAsset.ParentAssetID = ParentAssetID;
    this.sideNavService.open(this.assetDrawerTemplate);
  }

  onCloseDrawer(isSubmitted: boolean) {
    this.sideNavService.close();
    if (isSubmitted) {
      this.getAssets();
    }
  }
}
