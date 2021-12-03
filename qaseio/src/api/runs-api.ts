/* tslint:disable */
/* eslint-disable */
/**
 * Qase.io API
 * # Introduction  You can use our API to access [Qase.io](https://qase.io) API endpoints, which allows to retrieve information about entities stored in database and perform actions with them. The API is organized around [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer).  # API Rate limits  Your application can make up to 200 API requests per minute.  Once the limit is exceeded, clients receive an HTTP 429 with a Retry-After: X header to indicate how long their timeout period is before they will be able to send requests again. The timeout period is set to 60 seconds once the limit is exceeded.  # Authentication  To authorize, use this code:  ```shell # With shell, you can just pass the correct header with each request curl \"https://api.qase.io/v1/api_endpoint\"   -H \"Token: api_token\"   -H \"Content-Type: application/json\" ```  Make sure to replace `api_token` with your API key.  Qase.io uses API tokens to authenticate requests. You can view an manage your API keys in [API tokens pages](https://app.qase.io/user/api/token).  Your API keys has the same access rights as your role in the app, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.  Qase API expects for the API key to be included in all API requests to the server in a header that looks like the following:  `Token: api_token`  You must replace `api_token` with your personal API key.  All API requests must be made over [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure). Calls made over plain HTTP will fail. API requests without authentication will also fail.  # Access rights  Qase.io is using Role-based Access Control system to restrict some features usage in Web interface and the same rules are applied to API methods. In description for each method you will find a rule name, that is required to perform an action through API. If you don\'t have enough access rights, you will receive an error with `403` status code.  # Errors  Qase API uses the following error codes:  Code | Meaning ---------- | ------- 400 | Bad Request - Your request is invalid. 401 | Unauthorized - Your API key is wrong. 403 | Forbidden - Your role doesn\'t have enough permissions to perform this action 404 | Not Found - The resource could not be found. 405 | Method Not Allowed - You tried to access a resource with an invalid method. 406 | Not Acceptable - You requested a format that isn\'t json. 410 | Gone - The resource requested has been removed from our servers. 429 | Too Many Requests - You\'re performing too many requests! Slow down! 500 | Internal Server Error - We had a problem with our server. Try again later. 503 | Service Unavailable - We\'re temporarily offline for maintenance. Please try again later. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { IdResponse } from '../model';
// @ts-ignore
import { Response } from '../model';
// @ts-ignore
import { RunCreate } from '../model';
// @ts-ignore
import { RunListResponse } from '../model';
// @ts-ignore
import { RunPublic } from '../model';
// @ts-ignore
import { RunPublicResponse } from '../model';
// @ts-ignore
import { RunResponse } from '../model';
/**
 * RunsApi - axios parameter creator
 * @export
 */
export const RunsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method allows to complete a specific run. 
         * @summary Complete a specific run.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completeRun: async (code: string, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('completeRun', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('completeRun', 'id', id)
            const localVarPath = `/run/{code}/{id}/complete`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to create a run in selected project. 
         * @summary Create a new run.
         * @param {string} code Code of project, where to search entities.
         * @param {RunCreate} runCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRun: async (code: string, runCreate: RunCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('createRun', 'code', code)
            // verify required parameter 'runCreate' is not null or undefined
            assertParamExists('createRun', 'runCreate', runCreate)
            const localVarPath = `/run/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(runCreate, localVarRequestOptions, configuration);
            console.log(localVarRequestOptions);

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method completely deletes a run from repository. 
         * @summary Delete run.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRun: async (code: string, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('deleteRun', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRun', 'id', id)
            const localVarPath = `/run/{code}/{id}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve a specific run. 
         * @summary Get a specific run.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRun: async (code: string, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getRun', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRun', 'id', id)
            const localVarPath = `/run/{code}/{id}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve all runs stored in selected project. 
         * @summary Get all runs.
         * @param {string} code Code of project, where to search entities.
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {Array<string>} [include] Add this param to include a list of test cases into response. Possible value: cases 
         * @param {object} [filters] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRuns: async (code: string, limit?: number, offset?: number, include?: Array<string>, filters?: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getRuns', 'code', code)
            const localVarPath = `/run/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (include) {
                localVarQueryParameter['include'] = include;
            }

            if (filters !== undefined) {
                localVarQueryParameter['filters'] = filters;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to update a publicity of specific run. 
         * @summary Update publicity of a specific run.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {RunPublic} runPublic 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRunPublicity: async (code: string, id: number, runPublic: RunPublic, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('updateRunPublicity', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateRunPublicity', 'id', id)
            // verify required parameter 'runPublic' is not null or undefined
            assertParamExists('updateRunPublicity', 'runPublic', runPublic)
            const localVarPath = `/run/{code}/{id}/public`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(runPublic, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RunsApi - functional programming interface
 * @export
 */
export const RunsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RunsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method allows to complete a specific run. 
         * @summary Complete a specific run.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async completeRun(code: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.completeRun(code, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to create a run in selected project. 
         * @summary Create a new run.
         * @param {string} code Code of project, where to search entities.
         * @param {RunCreate} runCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRun(code: string, runCreate: RunCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRun(code, runCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method completely deletes a run from repository. 
         * @summary Delete run.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRun(code: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRun(code, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve a specific run. 
         * @summary Get a specific run.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRun(code: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRun(code, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve all runs stored in selected project. 
         * @summary Get all runs.
         * @param {string} code Code of project, where to search entities.
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {Array<string>} [include] Add this param to include a list of test cases into response. Possible value: cases 
         * @param {object} [filters] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRuns(code: string, limit?: number, offset?: number, include?: Array<string>, filters?: object, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRuns(code, limit, offset, include, filters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to update a publicity of specific run. 
         * @summary Update publicity of a specific run.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {RunPublic} runPublic 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRunPublicity(code: string, id: number, runPublic: RunPublic, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunPublicResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRunPublicity(code, id, runPublic, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RunsApi - factory interface
 * @export
 */
export const RunsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RunsApiFp(configuration)
    return {
        /**
         * This method allows to complete a specific run. 
         * @summary Complete a specific run.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completeRun(code: string, id: number, options?: any): AxiosPromise<Response> {
            return localVarFp.completeRun(code, id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to create a run in selected project. 
         * @summary Create a new run.
         * @param {string} code Code of project, where to search entities.
         * @param {RunCreate} runCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRun(code: string, runCreate: RunCreate, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.createRun(code, runCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * This method completely deletes a run from repository. 
         * @summary Delete run.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRun(code: string, id: number, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.deleteRun(code, id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve a specific run. 
         * @summary Get a specific run.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRun(code: string, id: number, options?: any): AxiosPromise<RunResponse> {
            return localVarFp.getRun(code, id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve all runs stored in selected project. 
         * @summary Get all runs.
         * @param {string} code Code of project, where to search entities.
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {Array<string>} [include] Add this param to include a list of test cases into response. Possible value: cases 
         * @param {object} [filters] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRuns(code: string, limit?: number, offset?: number, include?: Array<string>, filters?: object, options?: any): AxiosPromise<RunListResponse> {
            return localVarFp.getRuns(code, limit, offset, include, filters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to update a publicity of specific run. 
         * @summary Update publicity of a specific run.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {RunPublic} runPublic 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRunPublicity(code: string, id: number, runPublic: RunPublic, options?: any): AxiosPromise<RunPublicResponse> {
            return localVarFp.updateRunPublicity(code, id, runPublic, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RunsApi - object-oriented interface
 * @export
 * @class RunsApi
 * @extends {BaseAPI}
 */
export class RunsApi extends BaseAPI {
    /**
     * This method allows to complete a specific run. 
     * @summary Complete a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    public completeRun(code: string, id: number, options?: AxiosRequestConfig) {
        return RunsApiFp(this.configuration).completeRun(code, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to create a run in selected project. 
     * @summary Create a new run.
     * @param {string} code Code of project, where to search entities.
     * @param {RunCreate} runCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    public createRun(code: string, runCreate: RunCreate, options?: AxiosRequestConfig) {
        return RunsApiFp(this.configuration).createRun(code, runCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method completely deletes a run from repository. 
     * @summary Delete run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    public deleteRun(code: string, id: number, options?: AxiosRequestConfig) {
        return RunsApiFp(this.configuration).deleteRun(code, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve a specific run. 
     * @summary Get a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    public getRun(code: string, id: number, options?: AxiosRequestConfig) {
        return RunsApiFp(this.configuration).getRun(code, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve all runs stored in selected project. 
     * @summary Get all runs.
     * @param {string} code Code of project, where to search entities.
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {Array<string>} [include] Add this param to include a list of test cases into response. Possible value: cases 
     * @param {object} [filters] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    public getRuns(code: string, limit?: number, offset?: number, include?: Array<string>, filters?: object, options?: AxiosRequestConfig) {
        return RunsApiFp(this.configuration).getRuns(code, limit, offset, include, filters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to update a publicity of specific run. 
     * @summary Update publicity of a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {RunPublic} runPublic 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    public updateRunPublicity(code: string, id: number, runPublic: RunPublic, options?: AxiosRequestConfig) {
        return RunsApiFp(this.configuration).updateRunPublicity(code, id, runPublic, options).then((request) => request(this.axios, this.basePath));
    }
}