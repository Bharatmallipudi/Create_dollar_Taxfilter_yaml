import { TaxpayerApiImpl } from "./info/types";
import { ApiImplementation } from "../../dict/types";
import { TaxpayerApi } from "../../dict/api/taxpayer/types";


export class serviceApiimpl implements ApiImplementation {
    taxpayer:TaxpayerApiImpl=new TaxpayerApiImpl
}
