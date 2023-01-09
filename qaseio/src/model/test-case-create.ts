/* tslint:disable */
/* eslint-disable */
/**
 * Qase.io API
 * Qase API Specification.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { TestStepCreate } from './test-step-create';

/**
 * 
 * @export
 * @interface TestCaseCreate
 */
export interface TestCaseCreate {
    /**
     * 
     * @type {string}
     * @memberof TestCaseCreate
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof TestCaseCreate
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof TestCaseCreate
     */
    'preconditions'?: string;
    /**
     * 
     * @type {string}
     * @memberof TestCaseCreate
     */
    'postconditions'?: string;
    /**
     * 
     * @type {number}
     * @memberof TestCaseCreate
     */
    'severity'?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCaseCreate
     */
    'priority'?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCaseCreate
     */
    'behavior'?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCaseCreate
     */
    'type'?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCaseCreate
     */
    'layer'?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCaseCreate
     */
    'is_flaky'?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCaseCreate
     */
    'suite_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCaseCreate
     */
    'milestone_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCaseCreate
     */
    'automation'?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCaseCreate
     */
    'status'?: number;
    /**
     * A list of Attachment hashes.
     * @type {Array<string>}
     * @memberof TestCaseCreate
     */
    'attachments'?: Array<string>;
    /**
     * 
     * @type {Array<TestStepCreate>}
     * @memberof TestCaseCreate
     */
    'steps'?: Array<TestStepCreate>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TestCaseCreate
     */
    'tags'?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof TestCaseCreate
     */
    'params'?: { [key: string]: Array<string>; } | null;
    /**
     * A map of custom fields values (id => value)
     * @type {{ [key: string]: string; }}
     * @memberof TestCaseCreate
     */
    'custom_field'?: { [key: string]: string; };
}

