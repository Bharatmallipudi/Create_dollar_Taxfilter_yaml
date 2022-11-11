import { DeleteTaxpayerResponse, GetTaxpayerResponse, UpdateTaxpayerResponse, TaxpayerApi, CreateTaxpayerResponse,GetContactResponse,UpdateContactResponse,DeleteContactResponse,CreateContactInformationResponse } from "../../../dict/api/taxpayer/types";
import { Api } from "../../../dict/models";
import { collections, contact } from '../../admin/types'


export class TaxpayerApiImpl implements TaxpayerApi {
    getTaxpayer(): Promise<GetTaxpayerResponse> {
        return new Promise<GetTaxpayerResponse>((resolve, reject) => {
            collections.taxpayer!.find({}).toArray(function (err: any, result: any) {
                if (err) {
                    const response = <GetTaxpayerResponse>{
                        status: 400,
                        body: { message: `something went wrong` },
                    }
                    resolve(response)
                }
                const response = <GetTaxpayerResponse>{
                    status: 201,
                    body: result
                }
                resolve(response)
            })
        })
    }
    updateContact(Email: string, request: Api.CONTACT | undefined):Promise<UpdateContactResponse> {
        return new Promise<UpdateContactResponse>((resolve, reject) => {
            contact.cont!.updateOne(
                { Email: Email },
                { $set: request },
                function (err: any, result: any) {
                    if (err) {
                        const response = <UpdateContactResponse>{
                            status: 400,
                            body: { message: `Somting Went Wrong` }
                        }
                        resolve(response)
                    }
                    const response = <UpdateContactResponse>{
                        status: 201,
                        body: { message: `Update Taxpayer Sucessfully` }
                    }
                    resolve(response)

                }
            )

        })
    }

    deleteTaxpayer(SSN: number): Promise<DeleteTaxpayerResponse> {
        return new Promise<DeleteTaxpayerResponse>((resolve, reject) => {
            collections.taxpayer!.deleteOne(
                { SSN: SSN },
                function (err: any, result: any) {
                    if (err) {
                        const response = <DeleteTaxpayerResponse>{
                            status: 400,
                            body: { message: `someting went wrong` }
                        }
                        resolve(response)
                    }
                    const response = <DeleteTaxpayerResponse>{
                        status: 201,
                        body: {
                            message: `delete Taxpayer Sucessfully`
                        }
                    }
                    resolve(response)
                }
            )

        })
    }
    getContact():Promise<GetContactResponse> {
        return new Promise<GetContactResponse>((resolve, reject) => {
            contact.cont!.find({}).toArray(function (err: any, result: any) {
                if (err) {
                    const response = <GetContactResponse>{
                        status: 400,
                        body: { message: `something went wrong` },
                    }
                    resolve(response)
                }
                const response = <GetContactResponse>{
                    status: 201,
                    body: result
                }
                resolve(response)
            })
        })
    }
    updateTaxpayer(account_no: number, request: Api.BODYDATA | undefined): Promise<UpdateTaxpayerResponse> {
        return new Promise<UpdateTaxpayerResponse>((resolve, reject) => {
            collections.taxpayer!.updateOne(
                { account_no: account_no },
                { $set: request },
                function (err: any, result: any) {
                    if (err) {
                        const response = <UpdateTaxpayerResponse>{
                            status: 400,
                            body: { message: `Somting Went Wrong` }
                        }
                        resolve(response)
                    }
                    const response = <UpdateTaxpayerResponse>{
                        status: 201,
                        body: { message: `Update Taxpayer Sucessfully` }
                    }
                    resolve(response)

                }
            )

        })
    }
    createTaxpayer(request: Api.BODYDATA | undefined): Promise<CreateTaxpayerResponse> {
        return new Promise<CreateTaxpayerResponse>((resolve, reject) => {
            collections.taxpayer!.findOne(
                { account_no: request?.account_no },
                function (err: any, result: any) {
                    if (result) {
                        const response = <CreateTaxpayerResponse>{
                            status: 400,
                            body: { message: `Taxpayer Already Created` }
                        }
                        resolve(response)
                    }
                    else {
                        collections.taxpayer!.insertOne(
                            { account_no:request?.account_no, FirstName:request?.FirstName, MiddleName: request?.MiddleName, LastName: request?.LastName, Gender: request?.Gender, SSN: request?.SSN, DateofBirth: request?.DateofBirth, Occupation: request?.Occupation, FirstentrydateintoUSA: request?.FirstentrydateintoUSA, Visatype: request?.Visatype, FilingStatus: request?.FilingStatus },
                            function (err: any, result: any) {
                                if (err) {
                                    const response = <CreateTaxpayerResponse>{
                                        status: 400,
                                        body: { message: `Someting Went Wrong` }
                                    }
                                    resolve(response)
                                }
                                else {
                                    const response = <CreateTaxpayerResponse>{
                                        status: 201,
                                        body: { message: `Create taxpayer Sucessfuly` }
                                    }
                                    resolve(response)
                                }

                            }

                        )
                    }
                }
            )
        })
    }
    deleteContact(Email: string):Promise<DeleteContactResponse> {
        return new Promise<DeleteContactResponse>((resolve, reject) => {
            collections.taxpayer!.deleteOne(
                { Email: Email },
                function (err: any, result: any) {
                    if (err) {
                        const response = <DeleteContactResponse>{
                            status: 400,
                            body: { message: `someting went wrong` }
                        }
                        resolve(response)
                    }
                    const response = <DeleteContactResponse>{
                        status: 201,
                        body: {
                            message: `delete Taxpayer Sucessfully`
                        }
                    }
                    resolve(response)
                }
            )

        })
    }
    createContactInformation(request: Api.CONTACT | undefined):Promise<CreateContactInformationResponse> {
        return new Promise<CreateContactInformationResponse>((resolve, reject) => {
            contact.cont!.findOne(
                { Email: request?.Email },
                function (err: any, result: any) {
                    if (result) {
                        const response = <CreateContactInformationResponse>{
                            status: 400,
                            body: { message: `Taxpayer Already Created` }
                        }
                        resolve(response)
                    }
                    else {
                        contact.cont!.insertOne(
                            { contactNumber: request?.contactNumber, AlternativeNumber: request?.AlternativeNumber,  Email: request?.Email, Maillingaddress: request?.Maillingaddress, city: request?.city, zipcode: request?.zipcode, state: request?.state,},
                            function (err: any, result: any) {
                                if (err) {
                                    const response = <CreateContactInformationResponse>{
                                        status: 400,
                                        body: { message: `Someting Went Wrong` }
                                    }
                                    resolve(response)
                                }
                                else {
                                    const response = <CreateContactInformationResponse>{
                                        status: 201,
                                        body: { message: `Create taxpayer Sucessfuly` }
                                    }
                                    resolve(response)
                                }

                            }

                        )
                    }
                }
            )
        })
    }
}


