/**
 * Property Management API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Agent } from '../model/agent';
import { CurrentMonth } from '../model/currentMonth';
import { GainLostByMonth } from '../model/gainLostByMonth';
import { ManagementFee } from '../model/managementFee';
import { PropertyDataByQuarter } from '../model/propertyDataByQuarter';
import { PropertyType } from '../model/propertyType';
import { RentAmountByMonth } from '../model/rentAmountByMonth';
import { Suburb } from '../model/suburb';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class IPropertyManagementService {

    protected basePath = 'https://temp.com/v2';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Get Current Month
     * 
     * @param agencyId The Agency id
     * @param propType The property type
     * @param agent Get for agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCurrentMonth(agencyId: number, propType?: string, agent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<CurrentMonth>>;
    public getCurrentMonth(agencyId: number, propType?: string, agent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CurrentMonth>>>;
    public getCurrentMonth(agencyId: number, propType?: string, agent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CurrentMonth>>>;
    public getCurrentMonth(agencyId: number, propType?: string, agent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (agencyId === null || agencyId === undefined) {
            throw new Error('Required parameter agencyId was null or undefined when calling getCurrentMonth.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (propType !== undefined) {
            queryParameters = queryParameters.set('propType', <any>propType);
        }
        if (agent !== undefined) {
            queryParameters = queryParameters.set('agent', <any>agent);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<CurrentMonth>>(`${this.basePath}/propertymanagement/${encodeURIComponent(String(agencyId))}/currentmonth`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Gain/Lost By Month
     * 
     * @param agencyId The Agency id
     * @param financialMonth Financial month filter
     * @param propType The property type
     * @param suburb Suburb filter
     * @param agent Get for agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGainLostByMonth(agencyId: number, financialMonth: number, propType?: string, suburb?: string, agent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GainLostByMonth>>;
    public getGainLostByMonth(agencyId: number, financialMonth: number, propType?: string, suburb?: string, agent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GainLostByMonth>>>;
    public getGainLostByMonth(agencyId: number, financialMonth: number, propType?: string, suburb?: string, agent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GainLostByMonth>>>;
    public getGainLostByMonth(agencyId: number, financialMonth: number, propType?: string, suburb?: string, agent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (agencyId === null || agencyId === undefined) {
            throw new Error('Required parameter agencyId was null or undefined when calling getGainLostByMonth.');
        }
        if (financialMonth === null || financialMonth === undefined) {
            throw new Error('Required parameter financialMonth was null or undefined when calling getGainLostByMonth.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (financialMonth !== undefined) {
            queryParameters = queryParameters.set('financialMonth', <any>financialMonth);
        }
        if (propType !== undefined) {
            queryParameters = queryParameters.set('propType', <any>propType);
        }
        if (suburb !== undefined) {
            queryParameters = queryParameters.set('suburb', <any>suburb);
        }
        if (agent !== undefined) {
            queryParameters = queryParameters.set('agent', <any>agent);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GainLostByMonth>>(`${this.basePath}/propertymanagement/${encodeURIComponent(String(agencyId))}/gainlostbymonth`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get management fees by financial month
     * 
     * @param agencyId The Agency id
     * @param monthno The financial month number
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getManagementFeesByMonth(agencyId: number, monthno: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ManagementFee>>;
    public getManagementFeesByMonth(agencyId: number, monthno: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ManagementFee>>>;
    public getManagementFeesByMonth(agencyId: number, monthno: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ManagementFee>>>;
    public getManagementFeesByMonth(agencyId: number, monthno: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (agencyId === null || agencyId === undefined) {
            throw new Error('Required parameter agencyId was null or undefined when calling getManagementFeesByMonth.');
        }
        if (monthno === null || monthno === undefined) {
            throw new Error('Required parameter monthno was null or undefined when calling getManagementFeesByMonth.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (monthno !== undefined) {
            queryParameters = queryParameters.set('monthno', <any>monthno);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<ManagementFee>>(`${this.basePath}/propertymanagement/${encodeURIComponent(String(agencyId))}/managementfees`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get portfolio agents
     * 
     * @param agencyId The Agency id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPortfolioAgents(agencyId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Agent>>;
    public getPortfolioAgents(agencyId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Agent>>>;
    public getPortfolioAgents(agencyId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Agent>>>;
    public getPortfolioAgents(agencyId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (agencyId === null || agencyId === undefined) {
            throw new Error('Required parameter agencyId was null or undefined when calling getPortfolioAgents.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<Agent>>(`${this.basePath}/propertymanagement/${encodeURIComponent(String(agencyId))}/portfolioagents`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Property Data By Quarter
     * 
     * @param agencyId The Agency id
     * @param propType The property type
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPropertyDataByQuarter(agencyId: number, propType?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<PropertyDataByQuarter>>;
    public getPropertyDataByQuarter(agencyId: number, propType?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PropertyDataByQuarter>>>;
    public getPropertyDataByQuarter(agencyId: number, propType?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PropertyDataByQuarter>>>;
    public getPropertyDataByQuarter(agencyId: number, propType?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (agencyId === null || agencyId === undefined) {
            throw new Error('Required parameter agencyId was null or undefined when calling getPropertyDataByQuarter.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (propType !== undefined) {
            queryParameters = queryParameters.set('propType', <any>propType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<PropertyDataByQuarter>>(`${this.basePath}/propertymanagement/${encodeURIComponent(String(agencyId))}/byquarter`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get property types
     * 
     * @param agencyId The Agency id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPropertyTypes(agencyId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<PropertyType>>;
    public getPropertyTypes(agencyId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PropertyType>>>;
    public getPropertyTypes(agencyId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PropertyType>>>;
    public getPropertyTypes(agencyId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (agencyId === null || agencyId === undefined) {
            throw new Error('Required parameter agencyId was null or undefined when calling getPropertyTypes.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<PropertyType>>(`${this.basePath}/propertymanagement/${encodeURIComponent(String(agencyId))}/propertytypes`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Rent Amount Collected By Month
     * 
     * @param agencyId The Agency id
     * @param financialMonth Financial month filter
     * @param propType The property type
     * @param suburb Suburb filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRentAmountByMonth(agencyId: number, financialMonth: number, propType?: string, suburb?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<RentAmountByMonth>>;
    public getRentAmountByMonth(agencyId: number, financialMonth: number, propType?: string, suburb?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RentAmountByMonth>>>;
    public getRentAmountByMonth(agencyId: number, financialMonth: number, propType?: string, suburb?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RentAmountByMonth>>>;
    public getRentAmountByMonth(agencyId: number, financialMonth: number, propType?: string, suburb?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (agencyId === null || agencyId === undefined) {
            throw new Error('Required parameter agencyId was null or undefined when calling getRentAmountByMonth.');
        }
        if (financialMonth === null || financialMonth === undefined) {
            throw new Error('Required parameter financialMonth was null or undefined when calling getRentAmountByMonth.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (financialMonth !== undefined) {
            queryParameters = queryParameters.set('financialMonth', <any>financialMonth);
        }
        if (propType !== undefined) {
            queryParameters = queryParameters.set('propType', <any>propType);
        }
        if (suburb !== undefined) {
            queryParameters = queryParameters.set('suburb', <any>suburb);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<RentAmountByMonth>>(`${this.basePath}/propertymanagement/${encodeURIComponent(String(agencyId))}/rentamountbymonth`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Top Suburbs
     * 
     * @param agencyId The Agency id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTopSuburbs(agencyId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Suburb>>;
    public getTopSuburbs(agencyId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Suburb>>>;
    public getTopSuburbs(agencyId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Suburb>>>;
    public getTopSuburbs(agencyId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (agencyId === null || agencyId === undefined) {
            throw new Error('Required parameter agencyId was null or undefined when calling getTopSuburbs.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<Suburb>>(`${this.basePath}/propertymanagement/${encodeURIComponent(String(agencyId))}/topsuburbs`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
