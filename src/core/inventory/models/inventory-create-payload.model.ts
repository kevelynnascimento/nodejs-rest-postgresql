
export class InventoryCreatePayloadModel {
    originId: string;
    code: string;
    name: string;
    position: string;
    unit: string;
    quantityInBoxes: number;
    quantityInPallets: number;
    productGroupName: string;
    productSubgroupName: string;
}
