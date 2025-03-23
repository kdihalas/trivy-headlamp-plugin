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

import { ExposedSecretReportReportArtifact } from './ExposedSecretReportReportArtifact';
import { ExposedSecretReportReportRegistry } from './ExposedSecretReportReportRegistry';
import { ExposedSecretReportReportScanner } from './ExposedSecretReportReportScanner';
import { ExposedSecretReportReportSecrets } from './ExposedSecretReportReportSecrets';
import { ExposedSecretReportReportSummary } from './ExposedSecretReportReportSummary';

/**
 * Report is the actual exposed secret report data.
 *
 * @export
 */
export interface ExposedSecretReportReport {
  /** artifact
   * Artifact represents a standalone, executable package of software that includes everything needed to
run an application.
   *
   * @required {true}
   */
  artifact: ExposedSecretReportReportArtifact;
  /** registry
   * Registry is the registry the Artifact was pulled from.
   *
   * @required {false}
   */
  registry?: ExposedSecretReportReportRegistry;
  /** scanner
   * Scanner is the scanner that generated this report.
   *
   * @required {true}
   */
  scanner: ExposedSecretReportReportScanner;
  /** secrets
   * ExposedSecret is the spec for a exposed secret record.
   *
   * @required {true}
   */
  secrets: ExposedSecretReportReportSecrets[];
  /** summary
   * Summary is the exposed secrets counts grouped by Severity.
   *
   * @required {true}
   */
  summary: ExposedSecretReportReportSummary;
  /** updateTimestamp
   * UpdateTimestamp is a timestamp representing the server time in UTC when this report was updated.
   *
   * @required {true}
   * @format {date-time}
   */
  updateTimestamp: string;
}
