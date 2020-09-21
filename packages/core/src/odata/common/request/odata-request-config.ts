/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { createLogger, VALUE_IS_UNDEFINED } from '@sap-cloud-sdk/util';

export type RequestMethodType = 'get' | 'post' | 'patch' | 'delete' | 'put';

const logger = createLogger({
  package: '@sap-cloud-sdk/core',
  messageContext: 'odata-request-config'
});

/**
 * @hidden
 */
export abstract class ODataRequestConfig {
  payload: Record<string, any> | string;
  customServicePath: string;

  private _customHeaders: Record<string, string> = {};
  private _customQueryParameters: Record<string, string> = {};

  /**
   * Creates an instance of ODataRequest.
   *
   * @param method - HTTP method of the request
   * @param defaultServicePath - default path of the according service
   * @param contentType - The content type of the request
   */
  constructor(
    public method: RequestMethodType,
    readonly defaultServicePath: string,
    readonly contentType = 'application/json'
  ) {
    if (defaultServicePath === VALUE_IS_UNDEFINED) {
      logger.warn('The service path is undefined in "_defaultServicePath".');
    }
  }

  set customHeaders(headers: Record<string, string>) {
    this._customHeaders = {};
    this.addCustomHeaders(headers);
  }

  get customHeaders(): Record<string, string> {
    return this._customHeaders;
  }

  set customQueryParameters(queryParameters: Record<string, string>) {
    this._customQueryParameters = {};
    this.addCustomQueryParameters(queryParameters);
  }

  get customQueryParameters(): Record<string, string> {
    return this._customQueryParameters;
  }

  /**
   * Add custom headers to the request. This is useful in case you want to provide your own authorization headers for example.
   *
   * @param headers - Key-value pairs where the key is the name of a header property and the value is the respective value
   */
  addCustomHeaders(headers: Record<string, string>): void {
    Object.entries(headers).forEach(([key, value]) => {
      // Enforce lower case as HTTP headers are case-insensitive
      this.customHeaders[key.toLowerCase()] = value;
    });
  }

  /**
   * Add custom query parameters to the request. This is useful in case your OData service allows non-standard query parameters.
   *
   * @param queryParameters - Key-value pairs where the key is the name of a query parameter and the value is the respective value
   */
  addCustomQueryParameters(queryParameters: Record<string, string>): void {
    Object.entries(queryParameters).forEach(([key, value]) => {
      this.customQueryParameters[key] = value;
    });
  }

  protected prependDollarToQueryParameters(
    params: Record<string, any>
  ): Record<string, any> {
    return Object.entries(params).reduce((newParams, [key, value]) => {
      newParams[`$${key}`] = value;
      return newParams;
    }, {});
  }

  /**
   * @hidden
   */
  abstract resourcePath(): string;

  /**
   * @hidden
   */
  abstract queryParameters(): Record<string, any>;
}
