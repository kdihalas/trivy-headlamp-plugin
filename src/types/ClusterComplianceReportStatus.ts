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

import { ClusterComplianceReportStatusDetailReport } from './ClusterComplianceReportStatusDetailReport';
import { ClusterComplianceReportStatusSummary } from './ClusterComplianceReportStatusSummary';
import { ClusterComplianceReportStatusSummaryReport } from './ClusterComplianceReportStatusSummaryReport';

export interface ClusterComplianceReportStatus {
  /** detailReport
   * ComplianceReport represents a kubernetes scan report
   *
   * @required {false}
   */
  detailReport?: ClusterComplianceReportStatusDetailReport;
  /** summary
   *
   * @required {false}
   */
  summary?: ClusterComplianceReportStatusSummary;
  /** summaryReport
   * SummaryReport represents a kubernetes scan report with consolidated findings
   *
   * @required {false}
   */
  summaryReport?: ClusterComplianceReportStatusSummaryReport;
  /** updateTimestamp
   *
   * @required {true}
   * @format {date-time}
   */
  updateTimestamp: string;
}
