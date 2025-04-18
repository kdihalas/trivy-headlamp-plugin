/**
 *
 *
 *
 * The version of the OpenAPI document:
 * Contact Email:
 * License:
 *
 * NOTE: This file is auto generated by crdtotypes (https://github.com/yaacov/crdtoapi/).
 * https://github.com/yaacov/crdtoapi/README.crdtotypes
 */

import { ClusterComplianceReportSpecComplianceControls } from './ClusterComplianceReportSpecComplianceControls';

export interface ClusterComplianceReportSpecCompliance {
  /** controls
   * Control represent the cps controls data and mapping checks
   *
   * @required {true}
   */
  controls: ClusterComplianceReportSpecComplianceControls[];
  /** description
   *
   * @required {true}
   */
  description: string;
  /** id
   *
   * @required {true}
   */
  id: string;
  /** platform
   *
   * @required {true}
   */
  platform: string;
  /** relatedResources
   *
   * @required {true}
   */
  relatedResources: string[];
  /** title
   *
   * @required {true}
   */
  title: string;
  /** type
   *
   * @required {true}
   */
  type: string;
  /** version
   *
   * @required {true}
   */
  version: string;
}
