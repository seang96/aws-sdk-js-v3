import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An alias for an edge.</p>
 */
export interface Alias {
  /**
   * <p>The type of the alias.</p>
   */
  Type?: string;

  /**
   * <p>A list of names for the alias, including the canonical name.</p>
   */
  Names?: string[];

  /**
   * <p>The canonical name of the alias.</p>
   */
  Name?: string;
}

export namespace Alias {
  export const filterSensitiveLog = (obj: Alias): any => ({
    ...obj,
  });
}

/**
 * <p>Value of a segment annotation. Has one of three value types: Number, Boolean, or String.</p>
 */
export interface AnnotationValue {
  /**
   * <p>Value for a Boolean annotation.</p>
   */
  BooleanValue?: boolean;

  /**
   * <p>Value for a String annotation.</p>
   */
  StringValue?: string;

  /**
   * <p>Value for a Number annotation.</p>
   */
  NumberValue?: number;
}

export namespace AnnotationValue {
  export const filterSensitiveLog = (obj: AnnotationValue): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ServiceId {
  /**
   * <p></p>
   */
  AccountId?: string;

  /**
   * <p></p>
   */
  Type?: string;

  /**
   * <p></p>
   */
  Names?: string[];

  /**
   * <p></p>
   */
  Name?: string;
}

export namespace ServiceId {
  export const filterSensitiveLog = (obj: ServiceId): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a segment annotation.</p>
 */
export interface ValueWithServiceIds {
  /**
   * <p>Values of the annotation.</p>
   */
  AnnotationValue?: AnnotationValue;

  /**
   * <p>Services to which the annotation applies.</p>
   */
  ServiceIds?: ServiceId[];
}

export namespace ValueWithServiceIds {
  export const filterSensitiveLog = (obj: ValueWithServiceIds): any => ({
    ...obj,
  });
}

/**
 * <p>A list of Availability Zones corresponding to the segments in a trace.</p>
 */
export interface AvailabilityZoneDetail {
  /**
   * <p>The name of a corresponding Availability Zone.</p>
   */
  Name?: string;
}

export namespace AvailabilityZoneDetail {
  export const filterSensitiveLog = (obj: AvailabilityZoneDetail): any => ({
    ...obj,
  });
}

export interface BatchGetTracesRequest {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Specify the trace IDs of requests for which to retrieve segments.</p>
   */
  TraceIds: string[] | undefined;
}

export namespace BatchGetTracesRequest {
  export const filterSensitiveLog = (obj: BatchGetTracesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A segment from a trace that has been ingested by the X-Ray service. The segment can be
 *       compiled from documents uploaded with <a>PutTraceSegments</a>, or an
 *         <code>inferred</code> segment for a downstream service, generated from a subsegment sent by
 *       the service that called it.</p>
 *          <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">AWS X-Ray Segment
 *         Documents</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
 */
export interface Segment {
  /**
   * <p>The segment's ID.</p>
   */
  Id?: string;

  /**
   * <p>The segment document.</p>
   */
  Document?: string;
}

export namespace Segment {
  export const filterSensitiveLog = (obj: Segment): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of segment documents with matching trace IDs.</p>
 */
export interface Trace {
  /**
   * <p>The unique identifier for the request that generated the trace's segments and
   *       subsegments.</p>
   */
  Id?: string;

  /**
   * <p>LimitExceeded is set to true when the trace has exceeded one of the defined quotas. For
   *       more information about quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/xray.html">AWS X-Ray endpoints and quotas</a>.</p>
   */
  LimitExceeded?: boolean;

  /**
   * <p>Segment documents for the segments and subsegments that comprise the trace.</p>
   */
  Segments?: Segment[];

  /**
   * <p>The length of time in seconds between the start time of the root segment and the end
   *       time of the last segment that completed.</p>
   */
  Duration?: number;
}

export namespace Trace {
  export const filterSensitiveLog = (obj: Trace): any => ({
    ...obj,
  });
}

export interface BatchGetTracesResult {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Trace IDs of requests that haven't been processed.</p>
   */
  UnprocessedTraceIds?: string[];

  /**
   * <p>Full traces for the specified requests.</p>
   */
  Traces?: Trace[];
}

export namespace BatchGetTracesResult {
  export const filterSensitiveLog = (obj: BatchGetTracesResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request is missing required parameters or has invalid parameters.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The request exceeds the maximum number of requests per second.</p>
 */
export interface ThrottledException extends __SmithyException, $MetadataBearer {
  name: "ThrottledException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottledException {
  export const filterSensitiveLog = (obj: ThrottledException): any => ({
    ...obj,
  });
}

/**
 * <p>The structure containing configurations related to insights.</p>
 */
export interface InsightsConfiguration {
  /**
   * <p>Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be
   *             enabled on a group with InsightsEnabled set to true.</p>
   */
  NotificationsEnabled?: boolean;

  /**
   * <p>Set the InsightsEnabled value to true to enable insights or false to disable
   *             insights.</p>
   */
  InsightsEnabled?: boolean;
}

export namespace InsightsConfiguration {
  export const filterSensitiveLog = (obj: InsightsConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A map that contains tag keys and tag values to attach to an AWS X-Ray group or sampling
 *       rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a>
 *       in the <i>AWS General Reference</i>.</p>
 *          <p>The following restrictions apply to tags:</p>
 *          <ul>
 *             <li>
 *                <p>Maximum number of user-applied tags per resource: 50</p>
 *             </li>
 *             <li>
 *                <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for AWS use. You
 *           cannot edit or delete system tags.</p>
 *             </li>
 *          </ul>
 */
export interface Tag {
  /**
   * <p>An optional tag value, such as <code>Production</code> or <code>test-only</code>. The value can be
   *       a maximum of 255 characters, and contain only Unicode letters, numbers, or separators, or the following
   *       special characters: <code>+ - = . _ : /</code>
   *          </p>
   */
  Value: string | undefined;

  /**
   * <p>A tag key, such as <code>Stage</code> or <code>Name</code>. A tag key cannot be empty. The
   *       key can be a maximum of 128 characters, and can contain only Unicode letters, numbers, or separators,
   *       or the following special characters: <code>+ - = . _ : /</code>
   *          </p>
   */
  Key: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateGroupRequest {
  /**
   * <p>The case-sensitive name of the new group. Default is a reserved name and names must
   *             be unique.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray group.
   *             For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *                 resources</a> in the <i>AWS General Reference</i>.</p>
   *         <p>The following restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of user-applied tags per resource: 50</p>
   *             </li>
   *             <li>
   *                 <p>Maximum tag key length: 128 Unicode characters</p>
   *             </li>
   *             <li>
   *                 <p>Maximum tag value length: 256 Unicode characters</p>
   *             </li>
   *             <li>
   *                 <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . :
   *                     / = + - and @</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for AWS
   *                     use.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];

  /**
   * <p>The structure containing configurations related to insights.</p>
   *             <ul>
   *             <li>
   *                     <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     new group or false to disable insights for the new group.</p>
   *                 </li>
   *             <li>
   *                     <p>The NotifcationsEnabled boolean can be set to true to enable insights
   *                     notifications for the new group. Notifications may only be enabled on a group
   *                     with InsightsEnabled set to true.</p>
   *                 </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;

  /**
   * <p>The filter expression defining criteria by which to group traces.</p>
   */
  FilterExpression?: string;
}

export namespace CreateGroupRequest {
  export const filterSensitiveLog = (obj: CreateGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details and metadata for a group.</p>
 */
export interface Group {
  /**
   * <p>The structure containing configurations related to insights.</p>
   *         <ul>
   *             <li>
   *                 <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     group or false to disable insights for the group.</p>
   *             </li>
   *             <li>
   *                 <p>The NotifcationsEnabled  boolean can be set to true to enable insights
   *                     notifications through Amazon EventBridge for the group.</p>
   *             </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;

  /**
   * <p>The filter expression defining the parameters to include traces.</p>
   */
  FilterExpression?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the group generated based on the GroupName.</p>
   */
  GroupARN?: string;

  /**
   * <p>The unique case-sensitive name of the group.</p>
   */
  GroupName?: string;
}

export namespace Group {
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj,
  });
}

export interface CreateGroupResult {
  /**
   * <p>The group that was created. Contains the name of the group that was created, the Amazon Resource Name
   *             (ARN) of the group that was generated based on the group name, the filter expression, and the insight
   *             configuration that was assigned to the group.</p>
   */
  Group?: Group;
}

export namespace CreateGroupResult {
  export const filterSensitiveLog = (obj: CreateGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>A sampling rule that services use to decide whether to instrument a request. Rule
 *       fields can match properties of the service, or properties of a request. The service can ignore
 *       rules that don't match its properties.</p>
 */
export interface SamplingRule {
  /**
   * <p>The priority of the sampling rule.</p>
   */
  Priority: number | undefined;

  /**
   * <p>Matches the path from a request URL.</p>
   */
  URLPath: string | undefined;

  /**
   * <p>Matches the hostname from a request URL.</p>
   */
  Host: string | undefined;

  /**
   * <p>Matches the <code>name</code> that the service uses to identify itself in segments.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>Matches attributes derived from the request.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   */
  FixedRate: number | undefined;

  /**
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleName?: string;

  /**
   * <p>Matches the ARN of the AWS resource on which the service runs.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleARN?: string;

  /**
   * <p>The version of the sampling rule format (<code>1</code>).</p>
   */
  Version: number | undefined;

  /**
   * <p>A fixed number of matching requests to instrument per second, prior to applying the
   *       fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.</p>
   */
  ReservoirSize: number | undefined;

  /**
   * <p>Matches the <code>origin</code> that the service uses to identify its type in segments.</p>
   */
  ServiceType: string | undefined;

  /**
   * <p>Matches the HTTP method of a request.</p>
   */
  HTTPMethod: string | undefined;
}

export namespace SamplingRule {
  export const filterSensitiveLog = (obj: SamplingRule): any => ({
    ...obj,
  });
}

export interface CreateSamplingRuleRequest {
  /**
   * <p>The rule definition.</p>
   */
  SamplingRule: SamplingRule | undefined;

  /**
   * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray sampling
   *          rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             resources</a> in the <i>AWS General Reference</i>.</p>
   *          <p>The following restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of user-applied tags per resource: 50</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag key length: 128 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag value length: 256 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . :
   *                / = + - and @</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for AWS
   *                use.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];
}

export namespace CreateSamplingRuleRequest {
  export const filterSensitiveLog = (obj: CreateSamplingRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A <a>SamplingRule</a> and its metadata.</p>
 */
export interface SamplingRuleRecord {
  /**
   * <p>The sampling rule.</p>
   */
  SamplingRule?: SamplingRule;

  /**
   * <p>When the rule was last modified.</p>
   */
  ModifiedAt?: Date;

  /**
   * <p>When the rule was created.</p>
   */
  CreatedAt?: Date;
}

export namespace SamplingRuleRecord {
  export const filterSensitiveLog = (obj: SamplingRuleRecord): any => ({
    ...obj,
  });
}

export interface CreateSamplingRuleResult {
  /**
   * <p>The saved rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

export namespace CreateSamplingRuleResult {
  export const filterSensitiveLog = (obj: CreateSamplingRuleResult): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the maximum number of sampling rules.</p>
 */
export interface RuleLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "RuleLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace RuleLimitExceededException {
  export const filterSensitiveLog = (obj: RuleLimitExceededException): any => ({
    ...obj,
  });
}

export interface DeleteGroupRequest {
  /**
   * <p>The case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ARN of the group that was generated on creation.</p>
   */
  GroupARN?: string;
}

export namespace DeleteGroupRequest {
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteGroupResult {}

export namespace DeleteGroupResult {
  export const filterSensitiveLog = (obj: DeleteGroupResult): any => ({
    ...obj,
  });
}

export interface DeleteSamplingRuleRequest {
  /**
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleARN?: string;

  /**
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleName?: string;
}

export namespace DeleteSamplingRuleRequest {
  export const filterSensitiveLog = (obj: DeleteSamplingRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteSamplingRuleResult {
  /**
   * <p>The deleted rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

export namespace DeleteSamplingRuleResult {
  export const filterSensitiveLog = (obj: DeleteSamplingRuleResult): any => ({
    ...obj,
  });
}

export interface GetEncryptionConfigRequest {}

export namespace GetEncryptionConfigRequest {
  export const filterSensitiveLog = (obj: GetEncryptionConfigRequest): any => ({
    ...obj,
  });
}

export enum EncryptionStatus {
  ACTIVE = "ACTIVE",
  UPDATING = "UPDATING",
}

export enum EncryptionType {
  KMS = "KMS",
  NONE = "NONE",
}

/**
 * <p>A configuration document that specifies encryption configuration settings.</p>
 */
export interface EncryptionConfig {
  /**
   * <p>The ID of the customer master key (CMK) used for encryption, if applicable.</p>
   */
  KeyId?: string;

  /**
   * <p>The type of encryption. Set to <code>KMS</code> for encryption with CMKs. Set to <code>NONE</code> for
   *       default encryption.</p>
   */
  Type?: EncryptionType | string;

  /**
   * <p>The encryption status. While the status is <code>UPDATING</code>, X-Ray may encrypt data with a combination of the new and old settings.</p>
   */
  Status?: EncryptionStatus | string;
}

export namespace EncryptionConfig {
  export const filterSensitiveLog = (obj: EncryptionConfig): any => ({
    ...obj,
  });
}

export interface GetEncryptionConfigResult {
  /**
   * <p>The encryption configuration document.</p>
   */
  EncryptionConfig?: EncryptionConfig;
}

export namespace GetEncryptionConfigResult {
  export const filterSensitiveLog = (obj: GetEncryptionConfigResult): any => ({
    ...obj,
  });
}

export interface GetGroupRequest {
  /**
   * <p>The ARN of the group that was generated on creation.</p>
   */
  GroupARN?: string;

  /**
   * <p>The case-sensitive name of the group.</p>
   */
  GroupName?: string;
}

export namespace GetGroupRequest {
  export const filterSensitiveLog = (obj: GetGroupRequest): any => ({
    ...obj,
  });
}

export interface GetGroupResult {
  /**
   * <p>The group that was requested. Contains the name of the group, the ARN of the group,
   *             the filter expression, and the insight configuration assigned to the group.</p>
   */
  Group?: Group;
}

export namespace GetGroupResult {
  export const filterSensitiveLog = (obj: GetGroupResult): any => ({
    ...obj,
  });
}

export interface GetGroupsRequest {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetGroupsRequest {
  export const filterSensitiveLog = (obj: GetGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details for a group without metadata.</p>
 */
export interface GroupSummary {
  /**
   * <p>The ARN of the group generated based on the GroupName.</p>
   */
  GroupARN?: string;

  /**
   * <p>The filter expression defining the parameters to include traces.</p>
   */
  FilterExpression?: string;

  /**
   * <p>The structure containing configurations related to insights.</p>
   *         <ul>
   *             <li>
   *                 <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     group or false to disable insights for the group.</p>
   *             </li>
   *             <li>
   *                 <p>The NotificationsEnabled boolean can be set to true to enable insights notifications.
   *                     Notifications can only be enabled on a group with InsightsEnabled set to true.</p>
   *             </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;

  /**
   * <p>The unique case-sensitive name of the group.</p>
   */
  GroupName?: string;
}

export namespace GroupSummary {
  export const filterSensitiveLog = (obj: GroupSummary): any => ({
    ...obj,
  });
}

export interface GetGroupsResult {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The collection of all active groups.</p>
   */
  Groups?: GroupSummary[];
}

export namespace GetGroupsResult {
  export const filterSensitiveLog = (obj: GetGroupsResult): any => ({
    ...obj,
  });
}

export interface GetSamplingRulesRequest {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetSamplingRulesRequest {
  export const filterSensitiveLog = (obj: GetSamplingRulesRequest): any => ({
    ...obj,
  });
}

export interface GetSamplingRulesResult {
  /**
   * <p>Rule definitions and metadata.</p>
   */
  SamplingRuleRecords?: SamplingRuleRecord[];

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetSamplingRulesResult {
  export const filterSensitiveLog = (obj: GetSamplingRulesResult): any => ({
    ...obj,
  });
}

export interface GetSamplingStatisticSummariesRequest {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetSamplingStatisticSummariesRequest {
  export const filterSensitiveLog = (obj: GetSamplingStatisticSummariesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Aggregated request sampling data for a sampling rule across all services for a 10-second window.</p>
 */
export interface SamplingStatisticSummary {
  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;

  /**
   * <p>The number of requests recorded.</p>
   */
  SampledCount?: number;

  /**
   * <p>The number of requests that matched the rule.</p>
   */
  RequestCount?: number;

  /**
   * <p>The number of requests recorded with borrowed reservoir quota.</p>
   */
  BorrowCount?: number;

  /**
   * <p>The start time of the reporting window.</p>
   */
  Timestamp?: Date;
}

export namespace SamplingStatisticSummary {
  export const filterSensitiveLog = (obj: SamplingStatisticSummary): any => ({
    ...obj,
  });
}

export interface GetSamplingStatisticSummariesResult {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the number of requests instrumented for each sampling
   *          rule.</p>
   */
  SamplingStatisticSummaries?: SamplingStatisticSummary[];
}

export namespace GetSamplingStatisticSummariesResult {
  export const filterSensitiveLog = (obj: GetSamplingStatisticSummariesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Request sampling results for a single rule from a service. Results are for the last 10
 *       seconds unless the service has been assigned a longer reporting interval after a previous call
 *       to <a>GetSamplingTargets</a>.</p>
 */
export interface SamplingStatisticsDocument {
  /**
   * <p>The number of requests that matched the rule.</p>
   */
  RequestCount: number | undefined;

  /**
   * <p>A unique identifier for the service in hexadecimal.</p>
   */
  ClientID: string | undefined;

  /**
   * <p>The number of requests recorded.</p>
   */
  SampledCount: number | undefined;

  /**
   * <p>The current time.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>The number of requests recorded with borrowed reservoir quota.</p>
   */
  BorrowCount?: number;

  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName: string | undefined;
}

export namespace SamplingStatisticsDocument {
  export const filterSensitiveLog = (obj: SamplingStatisticsDocument): any => ({
    ...obj,
  });
}

export interface GetSamplingTargetsRequest {
  /**
   * <p>Information about rules that the service is using to sample requests.</p>
   */
  SamplingStatisticsDocuments: SamplingStatisticsDocument[] | undefined;
}

export namespace GetSamplingTargetsRequest {
  export const filterSensitiveLog = (obj: GetSamplingTargetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray
 *       calculates a new reservoir for each service based on the recent sampling results of all services that called <a>GetSamplingTargets</a>.</p>
 */
export interface SamplingTargetDocument {
  /**
   * <p>The number of requests per second that X-Ray allocated for this service.</p>
   */
  ReservoirQuota?: number;

  /**
   * <p>The number of seconds for the service to wait before getting sampling targets
   *       again.</p>
   */
  Interval?: number;

  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;

  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   */
  FixedRate?: number;

  /**
   * <p>When the reservoir quota expires.</p>
   */
  ReservoirQuotaTTL?: Date;
}

export namespace SamplingTargetDocument {
  export const filterSensitiveLog = (obj: SamplingTargetDocument): any => ({
    ...obj,
  });
}

/**
 * <p>Sampling statistics from a call to <a>GetSamplingTargets</a> that X-Ray
 *       could not process.</p>
 */
export interface UnprocessedStatistics {
  /**
   * <p>The error message.</p>
   */
  Message?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;
}

export namespace UnprocessedStatistics {
  export const filterSensitiveLog = (obj: UnprocessedStatistics): any => ({
    ...obj,
  });
}

export interface GetSamplingTargetsResult {
  /**
   * <p>The last time a user changed the sampling rule configuration. If
   *          the sampling rule configuration changed since the service last retrieved it, the service
   *          should call <a>GetSamplingRules</a> to get the latest version.</p>
   */
  LastRuleModification?: Date;

  /**
   * <p>Updated rules that the service should use to sample requests.</p>
   */
  SamplingTargetDocuments?: SamplingTargetDocument[];

  /**
   * <p>Information about <a>SamplingStatisticsDocument</a> that X-Ray could not
   *          process.</p>
   */
  UnprocessedStatistics?: UnprocessedStatistics[];
}

export namespace GetSamplingTargetsResult {
  export const filterSensitiveLog = (obj: GetSamplingTargetsResult): any => ({
    ...obj,
  });
}

export interface GetServiceGraphRequest {
  /**
   * <p>The name of a group based on which you want to generate a graph.</p>
   */
  GroupName?: string;

  /**
   * <p>The end of the timeframe for which to generate a graph.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.</p>
   */
  GroupARN?: string;

  /**
   * <p>The start of the time frame for which to generate a graph.</p>
   */
  StartTime: Date | undefined;
}

export namespace GetServiceGraphRequest {
  export const filterSensitiveLog = (obj: GetServiceGraphRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An entry in a histogram for a statistic. A histogram maps the range of observed values
 *       on the X axis, and the prevalence of each value on the Y axis.</p>
 */
export interface HistogramEntry {
  /**
   * <p>The value of the entry.</p>
   */
  Value?: number;

  /**
   * <p>The prevalence of the entry.</p>
   */
  Count?: number;
}

export namespace HistogramEntry {
  export const filterSensitiveLog = (obj: HistogramEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Information about requests that failed with a 4xx Client Error status code.</p>
 */
export interface ErrorStatistics {
  /**
   * <p>The total number of requests that failed with a 4xx Client Error status code.</p>
   */
  TotalCount?: number;

  /**
   * <p>The number of requests that failed with a 419 throttling status code.</p>
   */
  ThrottleCount?: number;

  /**
   * <p>The number of requests that failed with untracked 4xx Client Error status
   *       codes.</p>
   */
  OtherCount?: number;
}

export namespace ErrorStatistics {
  export const filterSensitiveLog = (obj: ErrorStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Information about requests that failed with a 5xx Server Error status code.</p>
 */
export interface FaultStatistics {
  /**
   * <p>The number of requests that failed with untracked 5xx Server Error status
   *       codes.</p>
   */
  OtherCount?: number;

  /**
   * <p>The total number of requests that failed with a 5xx Server Error status code.</p>
   */
  TotalCount?: number;
}

export namespace FaultStatistics {
  export const filterSensitiveLog = (obj: FaultStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Response statistics for an edge.</p>
 */
export interface EdgeStatistics {
  /**
   * <p>The number of requests that completed with a 2xx Success status code.</p>
   */
  OkCount?: number;

  /**
   * <p>Information about requests that failed with a 4xx Client Error status code.</p>
   */
  ErrorStatistics?: ErrorStatistics;

  /**
   * <p>The aggregate response time of completed requests.</p>
   */
  TotalResponseTime?: number;

  /**
   * <p>The total number of completed requests.</p>
   */
  TotalCount?: number;

  /**
   * <p>Information about requests that failed with a 5xx Server Error status code.</p>
   */
  FaultStatistics?: FaultStatistics;
}

export namespace EdgeStatistics {
  export const filterSensitiveLog = (obj: EdgeStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a connection between two services.</p>
 */
export interface Edge {
  /**
   * <p>A histogram that maps the spread of client response times on an edge.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];

  /**
   * <p>The start time of the first segment on the edge.</p>
   */
  StartTime?: Date;

  /**
   * <p>Identifier of the edge. Unique within a service map.</p>
   */
  ReferenceId?: number;

  /**
   * <p>Response statistics for segments on the edge.</p>
   */
  SummaryStatistics?: EdgeStatistics;

  /**
   * <p>The end time of the last segment on the edge.</p>
   */
  EndTime?: Date;

  /**
   * <p>Aliases for the edge.</p>
   */
  Aliases?: Alias[];
}

export namespace Edge {
  export const filterSensitiveLog = (obj: Edge): any => ({
    ...obj,
  });
}

/**
 * <p>Response statistics for a service.</p>
 */
export interface ServiceStatistics {
  /**
   * <p>The aggregate response time of completed requests.</p>
   */
  TotalResponseTime?: number;

  /**
   * <p>Information about requests that failed with a 5xx Server Error status code.</p>
   */
  FaultStatistics?: FaultStatistics;

  /**
   * <p>The number of requests that completed with a 2xx Success status code.</p>
   */
  OkCount?: number;

  /**
   * <p>The total number of completed requests.</p>
   */
  TotalCount?: number;

  /**
   * <p>Information about requests that failed with a 4xx Client Error status code.</p>
   */
  ErrorStatistics?: ErrorStatistics;
}

export namespace ServiceStatistics {
  export const filterSensitiveLog = (obj: ServiceStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an application that processed requests, users that made requests, or downstream services,
 *       resources, and applications that an application used.</p>
 */
export interface Service {
  /**
   * <p>Identifier of the AWS account in which the service runs.</p>
   */
  AccountId?: string;

  /**
   * <p>The end time of the last segment that the service generated.</p>
   */
  EndTime?: Date;

  /**
   * <p>Connections to downstream services.</p>
   */
  Edges?: Edge[];

  /**
   * <p>The type of service.</p>
   *          <ul>
   *             <li>
   *                <p>AWS Resource - The type of an AWS resource. For example, <code>AWS::EC2::Instance</code> for an
   *           application running on Amazon EC2 or <code>AWS::DynamoDB::Table</code> for an Amazon DynamoDB table that the
   *           application used.</p>
   *             </li>
   *             <li>
   *                <p>AWS Service - The type of an AWS service. For example, <code>AWS::DynamoDB</code>
   *           for downstream calls to Amazon DynamoDB that didn't target a specific table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>client</code> - Represents the clients that sent requests to a root
   *           service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>remote</code> - A downstream service of indeterminate type.</p>
   *             </li>
   *          </ul>
   */
  Type?: string;

  /**
   * <p>Identifier for the service. Unique within the service map.</p>
   */
  ReferenceId?: number;

  /**
   * <p>The service's state.</p>
   */
  State?: string;

  /**
   * <p>The start time of the first segment that the service generated.</p>
   */
  StartTime?: Date;

  /**
   * <p>A histogram that maps the spread of service durations.</p>
   */
  DurationHistogram?: HistogramEntry[];

  /**
   * <p>The canonical name of the service.</p>
   */
  Name?: string;

  /**
   * <p>A list of names for the service, including the canonical name.</p>
   */
  Names?: string[];

  /**
   * <p>A histogram that maps the spread of service response times.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];

  /**
   * <p>Indicates that the service was the first service to process a request.</p>
   */
  Root?: boolean;

  /**
   * <p>Aggregated statistics for the service.</p>
   */
  SummaryStatistics?: ServiceStatistics;
}

export namespace Service {
  export const filterSensitiveLog = (obj: Service): any => ({
    ...obj,
  });
}

export interface GetServiceGraphResult {
  /**
   * <p>A flag indicating whether the group's filter expression has been consistent, or
   *       if the returned service graph may show traces from an older version of the group's filter
   *       expression.</p>
   */
  ContainsOldGroupVersions?: boolean;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The services that have processed a traced request during the specified time
   *       frame.</p>
   */
  Services?: Service[];

  /**
   * <p>The start of the time frame for which the graph was generated.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end of the time frame for which the graph was generated.</p>
   */
  EndTime?: Date;
}

export namespace GetServiceGraphResult {
  export const filterSensitiveLog = (obj: GetServiceGraphResult): any => ({
    ...obj,
  });
}

export interface GetTimeSeriesServiceStatisticsRequest {
  /**
   * <p>A filter expression defining entities that will be aggregated for statistics.
   *             Supports ID, service, and edge functions. If no selector expression is specified, edge
   *             statistics are returned. </p>
   */
  EntitySelectorExpression?: string;

  /**
   * <p>The case-sensitive name of the group for which to pull statistics from.</p>
   */
  GroupName?: string;

  /**
   * <p>The end of the time frame for which to aggregate statistics.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The start of the time frame for which to aggregate statistics.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the group for which to pull statistics from.</p>
   */
  GroupARN?: string;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Aggregation period in seconds.</p>
   */
  Period?: number;
}

export namespace GetTimeSeriesServiceStatisticsRequest {
  export const filterSensitiveLog = (obj: GetTimeSeriesServiceStatisticsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A list of TimeSeriesStatistic structures.</p>
 */
export interface TimeSeriesServiceStatistics {
  /**
   * <p>Response statistics for a service.</p>
   */
  ServiceSummaryStatistics?: ServiceStatistics;

  /**
   * <p>Response statistics for an edge.</p>
   */
  EdgeSummaryStatistics?: EdgeStatistics;

  /**
   * <p>The response time histogram for the selected entities.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];

  /**
   * <p>Timestamp of the window for which statistics are aggregated.</p>
   */
  Timestamp?: Date;
}

export namespace TimeSeriesServiceStatistics {
  export const filterSensitiveLog = (obj: TimeSeriesServiceStatistics): any => ({
    ...obj,
  });
}

export interface GetTimeSeriesServiceStatisticsResult {
  /**
   * <p>A flag indicating whether or not a group's filter expression has been consistent, or if a returned
   *             aggregation might show statistics from an older version of the group's filter expression.</p>
   */
  ContainsOldGroupVersions?: boolean;

  /**
   * <p>The collection of statistics.</p>
   */
  TimeSeriesServiceStatistics?: TimeSeriesServiceStatistics[];

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetTimeSeriesServiceStatisticsResult {
  export const filterSensitiveLog = (obj: GetTimeSeriesServiceStatisticsResult): any => ({
    ...obj,
  });
}

export interface GetTraceGraphRequest {
  /**
   * <p>Trace IDs of requests for which to generate a service graph.</p>
   */
  TraceIds: string[] | undefined;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetTraceGraphRequest {
  export const filterSensitiveLog = (obj: GetTraceGraphRequest): any => ({
    ...obj,
  });
}

export interface GetTraceGraphResult {
  /**
   * <p>The services that have processed one of the specified requests.</p>
   */
  Services?: Service[];

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetTraceGraphResult {
  export const filterSensitiveLog = (obj: GetTraceGraphResult): any => ({
    ...obj,
  });
}

export enum SamplingStrategyName {
  FixedRate = "FixedRate",
  PartialScan = "PartialScan",
}

/**
 * <p>The name and value of a sampling rule to apply to a trace summary.</p>
 */
export interface SamplingStrategy {
  /**
   * <p>The name of a sampling rule.</p>
   */
  Name?: SamplingStrategyName | string;

  /**
   * <p>The value of a sampling rule.</p>
   */
  Value?: number;
}

export namespace SamplingStrategy {
  export const filterSensitiveLog = (obj: SamplingStrategy): any => ({
    ...obj,
  });
}

export enum TimeRangeType {
  Event = "Event",
  TraceId = "TraceId",
}

export interface GetTraceSummariesRequest {
  /**
   * <p>The end of the time frame for which to retrieve traces.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>A parameter to indicate whether to enable sampling on trace summaries. Input parameters are Name and
   *             Value.</p>
   */
  SamplingStrategy?: SamplingStrategy;

  /**
   * <p>Set to <code>true</code> to get summaries for only a subset of available
   *       traces.</p>
   */
  Sampling?: boolean;

  /**
   * <p>The start of the time frame for which to retrieve traces.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>A parameter to indicate whether to query trace summaries by TraceId or Event time.</p>
   */
  TimeRangeType?: TimeRangeType | string;

  /**
   * <p>Specify a filter expression to retrieve trace summaries for services or requests that
   *       meet certain requirements.</p>
   */
  FilterExpression?: string;

  /**
   * <p>Specify the pagination token returned by a previous request to retrieve the next page
   *       of results.</p>
   */
  NextToken?: string;
}

export namespace GetTraceSummariesRequest {
  export const filterSensitiveLog = (obj: GetTraceSummariesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The exception associated with a root cause.</p>
 */
export interface RootCauseException {
  /**
   * <p>The name of the exception.</p>
   */
  Name?: string;

  /**
   * <p>The message of the exception.</p>
   */
  Message?: string;
}

export namespace RootCauseException {
  export const filterSensitiveLog = (obj: RootCauseException): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of segments and corresponding subsegments associated to a trace summary
 *       error.</p>
 */
export interface ErrorRootCauseEntity {
  /**
   * <p>The types and messages of the exceptions.</p>
   */
  Exceptions?: RootCauseException[];

  /**
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

export namespace ErrorRootCauseEntity {
  export const filterSensitiveLog = (obj: ErrorRootCauseEntity): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of fields identifying the services in a trace summary error.</p>
 */
export interface ErrorRootCauseService {
  /**
   * <p>The account ID associated to the service.</p>
   */
  AccountId?: string;

  /**
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?: ErrorRootCauseEntity[];

  /**
   * <p>The service name.</p>
   */
  Name?: string;

  /**
   * <p>The type associated to the service.</p>
   */
  Type?: string;

  /**
   * <p>A collection of associated service names.</p>
   */
  Names?: string[];

  /**
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   */
  Inferred?: boolean;
}

export namespace ErrorRootCauseService {
  export const filterSensitiveLog = (obj: ErrorRootCauseService): any => ({
    ...obj,
  });
}

/**
 * <p>The root cause of a trace summary error.</p>
 */
export interface ErrorRootCause {
  /**
   * <p>A list of services corresponding to an error. A service identifies a segment and it
   *       contains a name, account ID, type, and inferred flag.</p>
   */
  Services?: ErrorRootCauseService[];

  /**
   * <p>A flag that denotes that the root cause impacts the trace client.</p>
   */
  ClientImpacting?: boolean;
}

export namespace ErrorRootCause {
  export const filterSensitiveLog = (obj: ErrorRootCause): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of segments and corresponding subsegments associated to a trace summary
 *       fault error.</p>
 */
export interface FaultRootCauseEntity {
  /**
   * <p>The types and messages of the exceptions.</p>
   */
  Exceptions?: RootCauseException[];

  /**
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

export namespace FaultRootCauseEntity {
  export const filterSensitiveLog = (obj: FaultRootCauseEntity): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of fields identifying the services in a trace summary fault.</p>
 */
export interface FaultRootCauseService {
  /**
   * <p>The service name.</p>
   */
  Name?: string;

  /**
   * <p>The type associated to the service.</p>
   */
  Type?: string;

  /**
   * <p>A collection of associated service names.</p>
   */
  Names?: string[];

  /**
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   */
  Inferred?: boolean;

  /**
   * <p>The account ID associated to the service.</p>
   */
  AccountId?: string;

  /**
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?: FaultRootCauseEntity[];
}

export namespace FaultRootCauseService {
  export const filterSensitiveLog = (obj: FaultRootCauseService): any => ({
    ...obj,
  });
}

/**
 * <p>The root cause information for a trace summary fault.</p>
 */
export interface FaultRootCause {
  /**
   * <p>A flag that denotes that the root cause impacts the trace client.</p>
   */
  ClientImpacting?: boolean;

  /**
   * <p>A list of corresponding services. A service identifies a segment and it contains a
   *       name, account ID, type, and inferred flag.</p>
   */
  Services?: FaultRootCauseService[];
}

export namespace FaultRootCause {
  export const filterSensitiveLog = (obj: FaultRootCause): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an HTTP request.</p>
 */
export interface Http {
  /**
   * <p>The request URL.</p>
   */
  HttpURL?: string;

  /**
   * <p>The response status.</p>
   */
  HttpStatus?: number;

  /**
   * <p>The request's user agent string.</p>
   */
  UserAgent?: string;

  /**
   * <p>The IP address of the requestor.</p>
   */
  ClientIp?: string;

  /**
   * <p>The request method.</p>
   */
  HttpMethod?: string;
}

export namespace Http {
  export const filterSensitiveLog = (obj: Http): any => ({
    ...obj,
  });
}

/**
 * <p>A list of EC2 instance IDs corresponding to the segments in a trace. </p>
 */
export interface InstanceIdDetail {
  /**
   * <p>The ID of a corresponding EC2 instance.</p>
   */
  Id?: string;
}

export namespace InstanceIdDetail {
  export const filterSensitiveLog = (obj: InstanceIdDetail): any => ({
    ...obj,
  });
}

/**
 * <p>A list of resources ARNs corresponding to the segments in a trace.</p>
 */
export interface ResourceARNDetail {
  /**
   * <p>The ARN of a corresponding resource.</p>
   */
  ARN?: string;
}

export namespace ResourceARNDetail {
  export const filterSensitiveLog = (obj: ResourceARNDetail): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of segments and corresponding subsegments associated to a response time
 *       warning.</p>
 */
export interface ResponseTimeRootCauseEntity {
  /**
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;

  /**
   * <p>The type and messages of the exceptions.</p>
   */
  Coverage?: number;
}

export namespace ResponseTimeRootCauseEntity {
  export const filterSensitiveLog = (obj: ResponseTimeRootCauseEntity): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of fields identifying the service in a response time warning.</p>
 */
export interface ResponseTimeRootCauseService {
  /**
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?: ResponseTimeRootCauseEntity[];

  /**
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   */
  Inferred?: boolean;

  /**
   * <p>The account ID associated to the service.</p>
   */
  AccountId?: string;

  /**
   * <p>The type associated to the service.</p>
   */
  Type?: string;

  /**
   * <p>A collection of associated service names.</p>
   */
  Names?: string[];

  /**
   * <p>The service name.</p>
   */
  Name?: string;
}

export namespace ResponseTimeRootCauseService {
  export const filterSensitiveLog = (obj: ResponseTimeRootCauseService): any => ({
    ...obj,
  });
}

/**
 * <p>The root cause information for a response time warning.</p>
 */
export interface ResponseTimeRootCause {
  /**
   * <p>A flag that denotes that the root cause impacts the trace client.</p>
   */
  ClientImpacting?: boolean;

  /**
   * <p>A list of corresponding services. A service identifies a segment and contains a name,
   *       account ID, type, and inferred flag.</p>
   */
  Services?: ResponseTimeRootCauseService[];
}

export namespace ResponseTimeRootCause {
  export const filterSensitiveLog = (obj: ResponseTimeRootCause): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a user recorded in segment documents.</p>
 */
export interface TraceUser {
  /**
   * <p>Services that the user's request hit.</p>
   */
  ServiceIds?: ServiceId[];

  /**
   * <p>The user's name.</p>
   */
  UserName?: string;
}

export namespace TraceUser {
  export const filterSensitiveLog = (obj: TraceUser): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata generated from the segment documents in a trace.</p>
 */
export interface TraceSummary {
  /**
   * <p>One or more of the segment documents is in progress.</p>
   */
  IsPartial?: boolean;

  /**
   * <p>One or more of the segment documents has a 429 throttling error.</p>
   */
  HasThrottle?: boolean;

  /**
   * <p>The unique identifier for the request that generated the trace's segments and
   *       subsegments.</p>
   */
  Id?: string;

  /**
   * <p>Service IDs from the trace's segment documents.</p>
   */
  ServiceIds?: ServiceId[];

  /**
   * <p>The root segment document has a 500 series error.</p>
   */
  HasFault?: boolean;

  /**
   * <p>The root segment document has a 400 series error.</p>
   */
  HasError?: boolean;

  /**
   * <p>A list of EC2 instance IDs for any instance corresponding to the trace
   *       segments.</p>
   */
  InstanceIds?: InstanceIdDetail[];

  /**
   * <p>The length of time in seconds between the start and end times of the root segment. If
   *       the service performs work asynchronously, the response time measures the time before the
   *       response is sent to the user, while the duration measures the amount of time before the last
   *       traced activity completes.</p>
   */
  ResponseTime?: number;

  /**
   * <p>A collection of FaultRootCause structures corresponding to the trace segments.</p>
   */
  FaultRootCauses?: FaultRootCause[];

  /**
   * <p>The root of a trace.</p>
   */
  EntryPoint?: ServiceId;

  /**
   * <p>A collection of ErrorRootCause structures corresponding to the trace
   *       segments.</p>
   */
  ErrorRootCauses?: ErrorRootCause[];

  /**
   * <p>The revision number of a trace.</p>
   */
  Revision?: number;

  /**
   * <p>A collection of ResponseTimeRootCause structures corresponding to the trace
   *       segments.</p>
   */
  ResponseTimeRootCauses?: ResponseTimeRootCause[];

  /**
   * <p>A list of resource ARNs for any resource corresponding to the trace segments.</p>
   */
  ResourceARNs?: ResourceARNDetail[];

  /**
   * <p>Information about the HTTP request served by the trace.</p>
   */
  Http?: Http;

  /**
   * <p>Annotations from the trace's segment documents.</p>
   */
  Annotations?: { [key: string]: ValueWithServiceIds[] };

  /**
   * <p>Users from the trace's segment documents.</p>
   */
  Users?: TraceUser[];

  /**
   * <p>A list of Availability Zones for any zone corresponding to the trace segments.</p>
   */
  AvailabilityZones?: AvailabilityZoneDetail[];

  /**
   * <p>The matched time stamp of a defined event.</p>
   */
  MatchedEventTime?: Date;

  /**
   * <p>The length of time in seconds between the start time of the root segment and the end
   *       time of the last segment that completed.</p>
   */
  Duration?: number;
}

export namespace TraceSummary {
  export const filterSensitiveLog = (obj: TraceSummary): any => ({
    ...obj,
  });
}

export interface GetTraceSummariesResult {
  /**
   * <p>Trace IDs and annotations for traces that were found in the specified time
   *       frame.</p>
   */
  TraceSummaries?: TraceSummary[];

  /**
   * <p>The start time of this page of results.</p>
   */
  ApproximateTime?: Date;

  /**
   * <p>The total number of traces processed, including traces that did not match the specified
   *       filter expression.</p>
   */
  TracesProcessedCount?: number;

  /**
   * <p>If the requested time frame contained more than one page of results, you can use this token to retrieve the
   *       next page. The first page contains the most recent results, closest to the end of the time frame.</p>
   */
  NextToken?: string;
}

export namespace GetTraceSummariesResult {
  export const filterSensitiveLog = (obj: GetTraceSummariesResult): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with
   *     the current page of results as the value of this parameter to get the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with
   *       the current page of results to get the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of tags, as key and value pairs, that is associated with the specified X-Ray group or sampling rule.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource was not found. Verify that the name or Amazon Resource Name (ARN) of the resource is
 *       correct.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  ResourceName?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface PutEncryptionConfigRequest {
  /**
   * <p>The type of encryption. Set to <code>KMS</code> to use your own key for encryption. Set
   *       to <code>NONE</code> for default encryption.</p>
   */
  Type: EncryptionType | string | undefined;

  /**
   * <p>An AWS KMS customer master key (CMK) in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Alias</b> - The name of the key. For example,
   *             <code>alias/MyKey</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Key ID</b> - The KMS key ID of the key. For example,
   *           <code>ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. AWS X-Ray does not support asymmetric CMKs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ARN</b> - The full Amazon Resource Name of the key ID or alias.
   *           For example,
   *             <code>arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>.
   *           Use this format to specify a key in a different account.</p>
   *             </li>
   *          </ul>
   *          <p>Omit this key if you set <code>Type</code> to <code>NONE</code>.</p>
   */
  KeyId?: string;
}

export namespace PutEncryptionConfigRequest {
  export const filterSensitiveLog = (obj: PutEncryptionConfigRequest): any => ({
    ...obj,
  });
}

export interface PutEncryptionConfigResult {
  /**
   * <p>The new encryption configuration.</p>
   */
  EncryptionConfig?: EncryptionConfig;
}

export namespace PutEncryptionConfigResult {
  export const filterSensitiveLog = (obj: PutEncryptionConfigResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface BackendConnectionErrors {
  /**
   * <p></p>
   */
  HTTPCode5XXCount?: number;

  /**
   * <p></p>
   */
  HTTPCode4XXCount?: number;

  /**
   * <p></p>
   */
  ConnectionRefusedCount?: number;

  /**
   * <p></p>
   */
  TimeoutCount?: number;

  /**
   * <p></p>
   */
  UnknownHostCount?: number;

  /**
   * <p></p>
   */
  OtherCount?: number;
}

export namespace BackendConnectionErrors {
  export const filterSensitiveLog = (obj: BackendConnectionErrors): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface TelemetryRecord {
  /**
   * <p></p>
   */
  Timestamp: Date | undefined;

  /**
   * <p></p>
   */
  SegmentsRejectedCount?: number;

  /**
   * <p></p>
   */
  BackendConnectionErrors?: BackendConnectionErrors;

  /**
   * <p></p>
   */
  SegmentsSpilloverCount?: number;

  /**
   * <p></p>
   */
  SegmentsReceivedCount?: number;

  /**
   * <p></p>
   */
  SegmentsSentCount?: number;
}

export namespace TelemetryRecord {
  export const filterSensitiveLog = (obj: TelemetryRecord): any => ({
    ...obj,
  });
}

export interface PutTelemetryRecordsRequest {
  /**
   * <p></p>
   */
  TelemetryRecords: TelemetryRecord[] | undefined;

  /**
   * <p></p>
   */
  ResourceARN?: string;

  /**
   * <p></p>
   */
  EC2InstanceId?: string;

  /**
   * <p></p>
   */
  Hostname?: string;
}

export namespace PutTelemetryRecordsRequest {
  export const filterSensitiveLog = (obj: PutTelemetryRecordsRequest): any => ({
    ...obj,
  });
}

export interface PutTelemetryRecordsResult {}

export namespace PutTelemetryRecordsResult {
  export const filterSensitiveLog = (obj: PutTelemetryRecordsResult): any => ({
    ...obj,
  });
}

export interface PutTraceSegmentsRequest {
  /**
   * <p>A string containing a JSON document defining one or more segments or
   *       subsegments.</p>
   */
  TraceSegmentDocuments: string[] | undefined;
}

export namespace PutTraceSegmentsRequest {
  export const filterSensitiveLog = (obj: PutTraceSegmentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a segment that failed processing.</p>
 */
export interface UnprocessedTraceSegment {
  /**
   * <p>The error message.</p>
   */
  Message?: string;

  /**
   * <p>The segment's ID.</p>
   */
  Id?: string;

  /**
   * <p>The error that caused processing to fail.</p>
   */
  ErrorCode?: string;
}

export namespace UnprocessedTraceSegment {
  export const filterSensitiveLog = (obj: UnprocessedTraceSegment): any => ({
    ...obj,
  });
}

export interface PutTraceSegmentsResult {
  /**
   * <p>Segments that failed processing.</p>
   */
  UnprocessedTraceSegments?: UnprocessedTraceSegment[];
}

export namespace PutTraceSegmentsResult {
  export const filterSensitiveLog = (obj: PutTraceSegmentsResult): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray group or
   *       sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a>
   *       in the <i>AWS General Reference</i>.</p>
   *          <p>The following restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of user-applied tags per resource: 50</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag key length: 128 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag value length: 256 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . :
   *           / = + - and @</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for AWS use. You
   *           cannot edit or delete system tags.</p>
   *             </li>
   *          </ul>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the maximum number of tags you can apply to this resource.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
  ResourceName?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>Keys for one or more tags that you want to remove from an X-Ray group or sampling rule.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.</p>
   */
  ResourceARN: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateGroupRequest {
  /**
   * <p>The updated filter expression defining criteria by which to group traces.</p>
   */
  FilterExpression?: string;

  /**
   * <p>The case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The structure containing configurations related to insights.</p>
   *         <ul>
   *             <li>
   *                 <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     group or false to disable insights for the group.</p>
   *             </li>
   *             <li>
   *                 <p>The NotifcationsEnabled boolean can be set to true to enable insights notifications for the group.
   *                     Notifications can only be enabled on a group with InsightsEnabled set to true.</p>
   *             </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;

  /**
   * <p>The ARN that was generated upon creation.</p>
   */
  GroupARN?: string;
}

export namespace UpdateGroupRequest {
  export const filterSensitiveLog = (obj: UpdateGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateGroupResult {
  /**
   * <p>The group that was updated. Contains the name of the group that was updated, the
   *             ARN of the group that was updated, the updated filter expression, and the updated insight
   *             configuration assigned to the group.</p>
   */
  Group?: Group;
}

export namespace UpdateGroupResult {
  export const filterSensitiveLog = (obj: UpdateGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>A document specifying changes to a sampling rule's configuration.</p>
 */
export interface SamplingRuleUpdate {
  /**
   * <p>Matches the <code>name</code> that the service uses to identify itself in segments.</p>
   */
  ServiceName?: string;

  /**
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleARN?: string;

  /**
   * <p>Matches attributes derived from the request.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>A fixed number of matching requests to instrument per second, prior to applying the
   *       fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.</p>
   */
  ReservoirSize?: number;

  /**
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleName?: string;

  /**
   * <p>Matches the HTTP method of a request.</p>
   */
  HTTPMethod?: string;

  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   */
  FixedRate?: number;

  /**
   * <p>Matches the path from a request URL.</p>
   */
  URLPath?: string;

  /**
   * <p>Matches the ARN of the AWS resource on which the service runs.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The priority of the sampling rule.</p>
   */
  Priority?: number;

  /**
   * <p>Matches the hostname from a request URL.</p>
   */
  Host?: string;

  /**
   * <p>Matches the <code>origin</code> that the service uses to identify its type in segments.</p>
   */
  ServiceType?: string;
}

export namespace SamplingRuleUpdate {
  export const filterSensitiveLog = (obj: SamplingRuleUpdate): any => ({
    ...obj,
  });
}

export interface UpdateSamplingRuleRequest {
  /**
   * <p>The rule and fields to change.</p>
   */
  SamplingRuleUpdate: SamplingRuleUpdate | undefined;
}

export namespace UpdateSamplingRuleRequest {
  export const filterSensitiveLog = (obj: UpdateSamplingRuleRequest): any => ({
    ...obj,
  });
}

export interface UpdateSamplingRuleResult {
  /**
   * <p>The updated rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

export namespace UpdateSamplingRuleResult {
  export const filterSensitiveLog = (obj: UpdateSamplingRuleResult): any => ({
    ...obj,
  });
}
