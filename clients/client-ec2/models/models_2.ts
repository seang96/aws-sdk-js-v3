import {
  AccountAttribute,
  AccountAttributeName,
  ActiveInstance,
  Address,
  AllocationState,
  AllowsMultipleInstanceTypes,
  AssociationStatus,
  AttachmentStatus,
  AttributeValue,
  AutoPlacement,
  BlockDeviceMapping,
  BundleTask,
  ByoipCidr,
  CapacityReservation,
  CapacityReservationPreference,
  CarrierGateway,
  ClientVpnAuthenticationType,
  ClientVpnAuthorizationRuleStatus,
  ClientVpnEndpointStatus,
  ClientVpnRouteStatus,
  CurrencyCodeValues,
  CustomerGateway,
  DefaultTargetCapacityType,
  DhcpOptions,
  DiskImageFormat,
  EgressOnlyInternetGateway,
  ExportTask,
  FleetCapacityReservationUsageStrategy,
  FleetExcessCapacityTerminationPolicy,
  FleetLaunchTemplateOverrides,
  FleetLaunchTemplateSpecification,
  FleetOnDemandAllocationStrategy,
  FleetType,
  HostRecovery,
  IamInstanceProfile,
  IamInstanceProfileAssociation,
  InstanceLifecycle,
  InternetGateway,
  LaunchTemplateAndOverridesResponse,
  LogDestinationType,
  Placement,
  PlatformValues,
  SpotAllocationStrategy,
  SpotInstanceInterruptionBehavior,
  Tag,
  TrafficType,
  TransitGatewayVpcAttachment,
  TransportProtocol,
  UnsuccessfulItem,
  _InstanceType,
} from "./models_0";
import {
  CapacityReservationTargetResponse,
  FleetStateCode,
  GroupIdentifier,
  InstanceIpv6Address,
  LaunchTemplate,
  LaunchTemplateVersion,
  LocalGatewayRouteTableVpcAssociation,
  NetworkInterfaceStatus,
  TransitGatewayRoute,
  TransitGatewayRouteTable,
} from "./models_1";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

export interface DeleteTransitGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: TransitGatewayRoute;
}

export namespace DeleteTransitGatewayRouteResult {
  export const filterSensitiveLog = (obj: DeleteTransitGatewayRouteResult): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayRouteTableRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;
}

export namespace DeleteTransitGatewayRouteTableRequest {
  export const filterSensitiveLog = (obj: DeleteTransitGatewayRouteTableRequest): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayRouteTableResult {
  /**
   * <p>Information about the deleted transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable;
}

export namespace DeleteTransitGatewayRouteTableResult {
  export const filterSensitiveLog = (obj: DeleteTransitGatewayRouteTableResult): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayVpcAttachmentRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;
}

export namespace DeleteTransitGatewayVpcAttachmentRequest {
  export const filterSensitiveLog = (obj: DeleteTransitGatewayVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the deleted VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export namespace DeleteTransitGatewayVpcAttachmentResult {
  export const filterSensitiveLog = (obj: DeleteTransitGatewayVpcAttachmentResult): any => ({
    ...obj,
  });
}

export interface DeleteVolumeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;
}

export namespace DeleteVolumeRequest {
  export const filterSensitiveLog = (obj: DeleteVolumeRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteVpcRequest {
  export const filterSensitiveLog = (obj: DeleteVpcRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcEndpointConnectionNotificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more notification IDs.</p>
   */
  ConnectionNotificationIds: string[] | undefined;
}

export namespace DeleteVpcEndpointConnectionNotificationsRequest {
  export const filterSensitiveLog = (obj: DeleteVpcEndpointConnectionNotificationsRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcEndpointConnectionNotificationsResult {
  /**
   * <p>Information about the notifications that could not be deleted
   *             successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace DeleteVpcEndpointConnectionNotificationsResult {
  export const filterSensitiveLog = (obj: DeleteVpcEndpointConnectionNotificationsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteVpcEndpoints.</p>
 */
export interface DeleteVpcEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more VPC endpoint IDs.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

export namespace DeleteVpcEndpointsRequest {
  export const filterSensitiveLog = (obj: DeleteVpcEndpointsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DeleteVpcEndpoints.</p>
 */
export interface DeleteVpcEndpointsResult {
  /**
   * <p>Information about the VPC endpoints that were not successfully deleted.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace DeleteVpcEndpointsResult {
  export const filterSensitiveLog = (obj: DeleteVpcEndpointsResult): any => ({
    ...obj,
  });
}

export interface DeleteVpcEndpointServiceConfigurationsRequest {
  /**
   * <p>The IDs of one or more services.</p>
   */
  ServiceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteVpcEndpointServiceConfigurationsRequest {
  export const filterSensitiveLog = (obj: DeleteVpcEndpointServiceConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcEndpointServiceConfigurationsResult {
  /**
   * <p>Information about the service configurations that were not deleted, if
   *             applicable.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace DeleteVpcEndpointServiceConfigurationsResult {
  export const filterSensitiveLog = (obj: DeleteVpcEndpointServiceConfigurationsResult): any => ({
    ...obj,
  });
}

export interface DeleteVpcPeeringConnectionRequest {
  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteVpcPeeringConnectionRequest {
  export const filterSensitiveLog = (obj: DeleteVpcPeeringConnectionRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcPeeringConnectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DeleteVpcPeeringConnectionResult {
  export const filterSensitiveLog = (obj: DeleteVpcPeeringConnectionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteVpnConnection.</p>
 */
export interface DeleteVpnConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;
}

export namespace DeleteVpnConnectionRequest {
  export const filterSensitiveLog = (obj: DeleteVpnConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteVpnConnectionRoute.</p>
 */
export interface DeleteVpnConnectionRouteRequest {
  /**
   * <p>The CIDR block associated with the local subnet of the customer network.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;
}

export namespace DeleteVpnConnectionRouteRequest {
  export const filterSensitiveLog = (obj: DeleteVpnConnectionRouteRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteVpnGateway.</p>
 */
export interface DeleteVpnGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId: string | undefined;
}

export namespace DeleteVpnGatewayRequest {
  export const filterSensitiveLog = (obj: DeleteVpnGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeprovisionByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. The prefix must be the same prefix
   *          that you specified when you provisioned the address range.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeprovisionByoipCidrRequest {
  export const filterSensitiveLog = (obj: DeprovisionByoipCidrRequest): any => ({
    ...obj,
  });
}

export interface DeprovisionByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace DeprovisionByoipCidrResult {
  export const filterSensitiveLog = (obj: DeprovisionByoipCidrResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeregisterImage.</p>
 */
export interface DeregisterImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;
}

export namespace DeregisterImageRequest {
  export const filterSensitiveLog = (obj: DeregisterImageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the tag keys to deregister for the current Region. You can either specify
 *    		individual tag keys or deregister all tag keys in the current Region. You must specify either
 *    		<code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request</p>
 */
export interface DeregisterInstanceTagAttributeRequest {
  /**
   * <p>Indicates whether to deregister all tag keys in the current Region. Specify <code>false</code>
   *    		to deregister all tag keys.</p>
   */
  IncludeAllTagsOfInstance?: boolean;

  /**
   * <p>Information about the tag keys to deregister.</p>
   */
  InstanceTagKeys?: string[];
}

export namespace DeregisterInstanceTagAttributeRequest {
  export const filterSensitiveLog = (obj: DeregisterInstanceTagAttributeRequest): any => ({
    ...obj,
  });
}

export interface DeregisterInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Information about the tag keys to deregister.</p>
   */
  InstanceTagAttribute?: DeregisterInstanceTagAttributeRequest;
}

export namespace DeregisterInstanceEventNotificationAttributesRequest {
  export const filterSensitiveLog = (obj: DeregisterInstanceEventNotificationAttributesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the registered tag keys for the current Region.</p>
 */
export interface InstanceTagNotificationAttribute {
  /**
   * <p>The registered tag keys.</p>
   */
  InstanceTagKeys?: string[];

  /**
   * <p>Indicates wheter all tag keys in the current Region are registered to appear in scheduled event notifications.
   *       	<code>true</code> indicates that all tag keys in the current Region are registered.</p>
   */
  IncludeAllTagsOfInstance?: boolean;
}

export namespace InstanceTagNotificationAttribute {
  export const filterSensitiveLog = (obj: InstanceTagNotificationAttribute): any => ({
    ...obj,
  });
}

export interface DeregisterInstanceEventNotificationAttributesResult {
  /**
   * <p>The resulting set of tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

export namespace DeregisterInstanceEventNotificationAttributesResult {
  export const filterSensitiveLog = (obj: DeregisterInstanceEventNotificationAttributesResult): any => ({
    ...obj,
  });
}

export interface DeregisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The IDs of the group members' network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeregisterTransitGatewayMulticastGroupMembersRequest {
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayMulticastGroupMembersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the deregistered  transit gateway multicast group members.</p>
 */
export interface TransitGatewayMulticastDeregisteredGroupMembers {
  /**
   * <p>The network interface IDs of the deregistered members.</p>
   */
  DeregisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;
}

export namespace TransitGatewayMulticastDeregisteredGroupMembers {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDeregisteredGroupMembers): any => ({
    ...obj,
  });
}

export interface DeregisterTransitGatewayMulticastGroupMembersResult {
  /**
   * <p>Information about the deregistered members.</p>
   */
  DeregisteredMulticastGroupMembers?: TransitGatewayMulticastDeregisteredGroupMembers;
}

export namespace DeregisterTransitGatewayMulticastGroupMembersResult {
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayMulticastGroupMembersResult): any => ({
    ...obj,
  });
}

export interface DeregisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IDs of the group sources' network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export namespace DeregisterTransitGatewayMulticastGroupSourcesRequest {
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayMulticastGroupSourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the deregistered  transit gateway multicast group sources.</p>
 */
export interface TransitGatewayMulticastDeregisteredGroupSources {
  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The network interface IDs of the non-registered members.</p>
   */
  DeregisteredNetworkInterfaceIds?: string[];
}

export namespace TransitGatewayMulticastDeregisteredGroupSources {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDeregisteredGroupSources): any => ({
    ...obj,
  });
}

export interface DeregisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * <p>Information about the deregistered group sources.</p>
   */
  DeregisteredMulticastGroupSources?: TransitGatewayMulticastDeregisteredGroupSources;
}

export namespace DeregisterTransitGatewayMulticastGroupSourcesResult {
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayMulticastGroupSourcesResult): any => ({
    ...obj,
  });
}

export interface DescribeAccountAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *            and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *            Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The account attribute names.</p>
   */
  AttributeNames?: (AccountAttributeName | string)[];
}

export namespace DescribeAccountAttributesRequest {
  export const filterSensitiveLog = (obj: DescribeAccountAttributesRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountAttributesResult {
  /**
   * <p>Information about the account attributes.</p>
   */
  AccountAttributes?: AccountAttribute[];
}

export namespace DescribeAccountAttributesResult {
  export const filterSensitiveLog = (obj: DescribeAccountAttributesResult): any => ({
    ...obj,
  });
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation.
 *          Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.
 *          The filters supported by a describe operation are documented with the describe operation. For example:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeAvailabilityZones</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeImages</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeInstances</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeKeyPairs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeSecurityGroups</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeSnapshots</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeSubnets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeVolumes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeVpcs</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Filter {
  /**
   * <p>The filter values. Filter values are case-sensitive.</p>
   */
  Values?: string[];

  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name?: string;
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

export interface DescribeAddressesRequest {
  /**
   * <p>One or more Elastic IP addresses.</p>
   *          <p>Default: Describes all your Elastic IP addresses.</p>
   */
  PublicIps?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allocation-id</code> - [EC2-VPC] The allocation ID for the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association-id</code> - [EC2-VPC] The association ID for the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>domain</code> - Indicates whether the address is for use in EC2-Classic (<code>standard</code>)
   *               or in a VPC (<code>vpc</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance the address is associated with, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-border-group</code> -  A unique set of Availability Zones, Local Zones,
   *           or Wavelength Zones from where AWS advertises IP addresses. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code> - [EC2-VPC] The ID of the network interface that the address is associated with, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-owner-id</code> - The AWS account ID of the owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - [EC2-VPC] The private IP address associated with the Elastic IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public-ip</code> - The Elastic IP address, or the carrier IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>[EC2-VPC] Information about the allocation IDs.</p>
   */
  AllocationIds?: string[];
}

export namespace DescribeAddressesRequest {
  export const filterSensitiveLog = (obj: DescribeAddressesRequest): any => ({
    ...obj,
  });
}

export interface DescribeAddressesResult {
  /**
   * <p>Information about the Elastic IP addresses.</p>
   */
  Addresses?: Address[];
}

export namespace DescribeAddressesResult {
  export const filterSensitiveLog = (obj: DescribeAddressesResult): any => ({
    ...obj,
  });
}

export interface DescribeAggregateIdFormatRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeAggregateIdFormatRequest {
  export const filterSensitiveLog = (obj: DescribeAggregateIdFormatRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the ID format for a resource.</p>
 */
export interface IdFormat {
  /**
   * <p>Indicates whether longer IDs (17-character IDs) are enabled for the resource.</p>
   */
  UseLongIds?: boolean;

  /**
   * <p>The date in UTC at which you are permanently switched over to using longer IDs. If a deadline is not yet available for this resource type, this field is not returned.</p>
   */
  Deadline?: Date;

  /**
   * <p>The type of resource.</p>
   */
  Resource?: string;
}

export namespace IdFormat {
  export const filterSensitiveLog = (obj: IdFormat): any => ({
    ...obj,
  });
}

export interface DescribeAggregateIdFormatResult {
  /**
   * <p>Information about each resource's ID format.</p>
   */
  Statuses?: IdFormat[];

  /**
   * <p>Indicates whether all resource types in the Region are configured to use longer IDs.
   *             This value is only <code>true</code> if all users are configured to use longer IDs for
   *             all resources types in the Region.</p>
   */
  UseLongIdsAggregated?: boolean;
}

export namespace DescribeAggregateIdFormatResult {
  export const filterSensitiveLog = (obj: DescribeAggregateIdFormatResult): any => ({
    ...obj,
  });
}

export interface DescribeAvailabilityZonesRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - For Availability Zones, use the Region name. For Local
   *           Zones, use the name of the group associated with the Local Zone (for example,
   *             <code>us-west-2-lax-1</code>) For Wavelength Zones, use the name of the group associated
   *           with the Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>message</code> - The Zone message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>opt-in-status</code> - The opt-in status (<code>opted-in</code>, and
   *             <code>not-opted-in</code> | <code>opt-in-not-required</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parent-zoneID</code> - The ID of the zone that handles some of the Local Zone
   *           and Wavelength Zone control plane operations, such as API calls.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parent-zoneName</code> - The ID of the zone that handles some of the Local Zone
   *           and Wavelength Zone control plane operations, such as API calls.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region-name</code> - The name of the Region for the Zone (for example,
   *             <code>us-east-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Availability Zone, the Local Zone, or the
   *           Wavelength Zone (<code>available</code> | <code>information</code> | <code>impaired</code>
   *           | <code>unavailable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-id</code> - The ID of the Availability Zone (for example,
   *             <code>use1-az1</code>), the Local Zone (for example, <code>usw2-lax1-az1</code>), or the
   *           Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-type</code> - The type of zone, for example, <code>local-zone</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-name</code> - The name of the Availability Zone (for example,
   *             <code>us-east-1a</code>), the Local Zone (for example, <code>us-west-2-lax-1a</code>), or
   *           the Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-type</code> - The type of zone, for example, <code>local-zone</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The names of the Availability Zones, Local Zones, and Wavelength Zones.</p>
   */
  ZoneNames?: string[];

  /**
   * <p>The IDs of the Availability Zones, Local Zones, and Wavelength Zones.</p>
   */
  ZoneIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Include all Availability Zones, Local Zones, and Wavelength Zones regardless of your
   *       opt-in status.</p>
   *          <p>If you do not use this parameter, the results include only the zones for the Regions where you have chosen the option to opt in.</p>
   */
  AllAvailabilityZones?: boolean;
}

export namespace DescribeAvailabilityZonesRequest {
  export const filterSensitiveLog = (obj: DescribeAvailabilityZonesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a message about an Availability Zone, Local Zone, or Wavelength Zone.</p>
 */
export interface AvailabilityZoneMessage {
  /**
   * <p>The message about the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  Message?: string;
}

export namespace AvailabilityZoneMessage {
  export const filterSensitiveLog = (obj: AvailabilityZoneMessage): any => ({
    ...obj,
  });
}

export type AvailabilityZoneOptInStatus = "not-opted-in" | "opt-in-not-required" | "opted-in";

export type AvailabilityZoneState = "available" | "impaired" | "information" | "unavailable";

/**
 * <p>Describes Availability Zones, Local Zones, and Wavelength Zones.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  ZoneName?: string;

  /**
   * <p>The state of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  State?: AvailabilityZoneState | string;

  /**
   * <p>The name of the network border group.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>Any messages about the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  Messages?: AvailabilityZoneMessage[];

  /**
   * <p>For Availability Zones, this parameter always has the value of
   *         <code>opt-in-not-required</code>.</p>
   *          <p>For Local Zones and Wavelength Zones, this parameter is the opt-in status. The possible
   *       values are <code>opted-in</code>, and <code>not-opted-in</code>.</p>
   */
  OptInStatus?: AvailabilityZoneOptInStatus | string;

  /**
   * <p>The name of the zone that handles some of the Local Zone or Wavelength Zone control plane
   *       operations, such as API calls.</p>
   */
  ParentZoneName?: string;

  /**
   * <p>The ID of the zone that handles some of the Local Zone or Wavelength Zone control plane
   *       operations, such as API calls.</p>
   */
  ParentZoneId?: string;

  /**
   * <p> For Availability Zones, this parameter has the same value as the Region name.</p>
   *          <p>For Local Zones, the name of the associated group, for example
   *         <code>us-west-2-lax-1</code>.</p>
   *          <p>For Wavelength Zones, the name of the associated group, for example
   *         <code>us-east-1-wl1-bos-wlz-1</code>.</p>
   */
  GroupName?: string;

  /**
   * <p>The type of zone. The valid values are <code>availability-zone</code>,
   *         <code>local-zone</code>, and <code>wavelength-zone</code>.</p>
   */
  ZoneType?: string;

  /**
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The ID of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  ZoneId?: string;
}

export namespace AvailabilityZone {
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
}

export interface DescribeAvailabilityZonesResult {
  /**
   * <p>Information about the Availability Zones, Local Zones, and Wavelength Zones.</p>
   */
  AvailabilityZones?: AvailabilityZone[];
}

export namespace DescribeAvailabilityZonesResult {
  export const filterSensitiveLog = (obj: DescribeAvailabilityZonesResult): any => ({
    ...obj,
  });
}

export interface DescribeBundleTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>bundle-id</code> - The ID of the bundle task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error-code</code> - If the task failed, the error code returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error-message</code> - If the task failed, the error message returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>progress</code> - The level of task completion, as a percentage (for example, 20%).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3-bucket</code> - The Amazon S3 bucket to store the AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3-prefix</code> - The beginning of the AMI name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The time the task started (for example, 2013-09-15T17:15:20.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the task (<code>pending</code> | <code>waiting-for-shutdown</code> | <code>bundling</code> |
   *            <code>storing</code> | <code>cancelling</code> | <code>complete</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-time</code> - The time of the most recent update for the task.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The bundle task IDs.</p>
   *          <p>Default: Describes all your bundle tasks.</p>
   */
  BundleIds?: string[];
}

export namespace DescribeBundleTasksRequest {
  export const filterSensitiveLog = (obj: DescribeBundleTasksRequest): any => ({
    ...obj,
  });
}

export interface DescribeBundleTasksResult {
  /**
   * <p>Information about the bundle tasks.</p>
   */
  BundleTasks?: BundleTask[];
}

export namespace DescribeBundleTasksResult {
  export const filterSensitiveLog = (obj: DescribeBundleTasksResult): any => ({
    ...obj,
  });
}

export interface DescribeByoipCidrsRequest {
  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeByoipCidrsRequest {
  export const filterSensitiveLog = (obj: DescribeByoipCidrsRequest): any => ({
    ...obj,
  });
}

export interface DescribeByoipCidrsResult {
  /**
   * <p>Information about your address ranges.</p>
   */
  ByoipCidrs?: ByoipCidr[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeByoipCidrsResult {
  export const filterSensitiveLog = (obj: DescribeByoipCidrsResult): any => ({
    ...obj,
  });
}

export interface DescribeCapacityReservationsRequest {
  /**
   * <p>One or more filters.</p>
   * 	  	     <ul>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance for which the Capacity Reservation reserves capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the AWS account that owns the Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The Availability Zone ID of the Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-platform</code> - The type of operating system for which the Capacity Reservation reserves capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone ID of the Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the
   * 	  			following tenancy settings:</p>
   * 	  			         <ul>
   *                   <li>
   *                      <p>
   *                         <code>default</code> - The Capacity Reservation is created on hardware that is shared with other AWS accounts.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single AWS account.</p>
   *                   </li>
   *                </ul>
   * 	  			      </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
   * 	  		          <ul>
   *                   <li>
   *                      <p>
   *                         <code>active</code>- The Capacity Reservation is active and the capacity is available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified in your request.
   * 	  				The reserved capacity is no longer available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>cancelled</code> - The Capacity Reservation was manually cancelled. The reserved capacity is no longer available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>pending</code> - The Capacity Reservation request was successful but the capacity provisioning is still pending.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>failed</code> - The Capacity Reservation request has failed. A request might fail due to invalid request parameters,
   * 	  				capacity constraints, or instance limit constraints. Failed requests are retained for 60 minutes.</p>
   * 	  		             </li>
   *                </ul>
   * 	  		       </li>
   *             <li>
   *                <p>
   *                   <code>end-date</code> - The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is
   * 	  			released and you can no longer launch instances into it. The Capacity Reservation's state changes to expired when it reaches its end date and time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date-type</code> - Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:</p>
   * 	  		          <ul>
   *                   <li>
   *                      <p>
   *                         <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p>
   *                   </li>
   *                </ul>
   * 	  		       </li>
   *             <li>
   *                <p>
   *                   <code>instance-match-criteria</code> - Indicates the type of instance launches that the Capacity Reservation accepts. The options include:</p>
   * 	  			         <ul>
   *                   <li>
   *                      <p>
   *                         <code>open</code> - The Capacity Reservation accepts all instances that have matching
   * 							attributes (instance type, platform, and Availability Zone). Instances
   * 							that have matching attributes launch into the Capacity Reservation
   * 							automatically without specifying any additional parameters.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>targeted</code> - The Capacity Reservation only accepts instances that have matching
   * 							attributes (instance type, platform, and Availability Zone), and
   * 							explicitly target the Capacity Reservation. This ensures that only
   * 							permitted instances can use the reserved capacity.</p>
   *                   </li>
   *                </ul>
   * 	  		       </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;
}

export namespace DescribeCapacityReservationsRequest {
  export const filterSensitiveLog = (obj: DescribeCapacityReservationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeCapacityReservationsResult {
  /**
   * <p>Information about the Capacity Reservations.</p>
   */
  CapacityReservations?: CapacityReservation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeCapacityReservationsResult {
  export const filterSensitiveLog = (obj: DescribeCapacityReservationsResult): any => ({
    ...obj,
  });
}

export interface DescribeCarrierGatewaysRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>carrier-gateway-id</code> - The ID of the carrier gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the carrier gateway (<code>pending</code> |
   *                     <code>failed</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>owner-id</code> - The AWS account ID of the owner of the carrier gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-id</code> - The ID of the VPC associated with the carrier gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more carrier gateway IDs.</p>
   */
  CarrierGatewayIds?: string[];
}

export namespace DescribeCarrierGatewaysRequest {
  export const filterSensitiveLog = (obj: DescribeCarrierGatewaysRequest): any => ({
    ...obj,
  });
}

export interface DescribeCarrierGatewaysResult {
  /**
   * <p>Information about the carrier gateway.</p>
   */
  CarrierGateways?: CarrierGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeCarrierGatewaysResult {
  export const filterSensitiveLog = (obj: DescribeCarrierGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeClassicLinkInstancesRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   *                       <p>
   *                   <code>group-id</code> - The ID of a VPC security group that's associated with the instance.</p>
   *                   </li>
   *             <li>
   * 				           <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   * 			         </li>
   *             <li>
   * 			            <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 			         </li>
   *             <li>
   *
   * 				           <p>
   * 					             <code>vpc-id</code> - The ID of the VPC to which the instance is
   * 					linked.</p>
   *
   * 				           <p>
   *                   <code>vpc-id</code> - The ID of the VPC that the instance is linked to.</p>
   *
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * 		       <p>Constraint: If the value is greater than 1000, we return only 1000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more instance IDs. Must be instances linked to a VPC through ClassicLink.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeClassicLinkInstancesRequest {
  export const filterSensitiveLog = (obj: DescribeClassicLinkInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a linked EC2-Classic instance.</p>
 */
export interface ClassicLinkInstance {
  /**
   * <p>A list of security groups.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>Any tags assigned to the instance.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace ClassicLinkInstance {
  export const filterSensitiveLog = (obj: ClassicLinkInstance): any => ({
    ...obj,
  });
}

export interface DescribeClassicLinkInstancesResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about one or more linked EC2-Classic instances.</p>
   */
  Instances?: ClassicLinkInstance[];
}

export namespace DescribeClassicLinkInstancesResult {
  export const filterSensitiveLog = (obj: DescribeClassicLinkInstancesResult): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnAuthorizationRulesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the authorization rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>destination-cidr</code> - The CIDR of the network to which the authorization rule
   *                     applies.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of the Active Directory group to which the authorization rule grants access.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;
}

export namespace DescribeClientVpnAuthorizationRulesRequest {
  export const filterSensitiveLog = (obj: DescribeClientVpnAuthorizationRulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an authorization rule.</p>
 */
export interface AuthorizationRule {
  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: ClientVpnAuthorizationRuleStatus;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>Indicates whether the authorization rule grants access to all clients.</p>
   */
  AccessAll?: boolean;

  /**
   * <p>The ID of the Active Directory group to which the authorization rule grants access.</p>
   */
  GroupId?: string;

  /**
   * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>A brief description of the authorization rule.</p>
   */
  Description?: string;
}

export namespace AuthorizationRule {
  export const filterSensitiveLog = (obj: AuthorizationRule): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnAuthorizationRulesResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the authorization rules.</p>
   */
  AuthorizationRules?: AuthorizationRule[];
}

export namespace DescribeClientVpnAuthorizationRulesResult {
  export const filterSensitiveLog = (obj: DescribeClientVpnAuthorizationRulesResult): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnConnectionsRequest {
  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>connection-id</code> - The ID of the connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>username</code> - For Active Directory client authentication, the user name of the
   *                     client who established the client connection.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeClientVpnConnectionsRequest {
  export const filterSensitiveLog = (obj: DescribeClientVpnConnectionsRequest): any => ({
    ...obj,
  });
}

export type ClientVpnConnectionStatusCode = "active" | "failed-to-terminate" | "terminated" | "terminating";

/**
 * <p>Describes the status of a client connection.</p>
 */
export interface ClientVpnConnectionStatus {
  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   */
  Message?: string;

  /**
   * <p>The state of the client connection.</p>
   */
  Code?: ClientVpnConnectionStatusCode | string;
}

export namespace ClientVpnConnectionStatus {
  export const filterSensitiveLog = (obj: ClientVpnConnectionStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a client connection.</p>
 */
export interface ClientVpnConnection {
  /**
   * <p>The common name associated with the client. This is either the name of the client certificate,
   * 			or the Active Directory user name.</p>
   */
  CommonName?: string;

  /**
   * <p>The ID of the client connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The number of packets received by the client.</p>
   */
  EgressPackets?: string;

  /**
   * <p>The date and time the client connection was established.</p>
   */
  ConnectionEstablishedTime?: string;

  /**
   * <p>The number of bytes received by the client.</p>
   */
  EgressBytes?: string;

  /**
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The current date and time.</p>
   */
  Timestamp?: string;

  /**
   * <p>The username of the client who established the client connection. This information is only provided
   * 			if Active Directory client authentication is used.</p>
   */
  Username?: string;

  /**
   * <p>The IP address of the client.</p>
   */
  ClientIp?: string;

  /**
   * <p>The number of bytes sent by the client.</p>
   */
  IngressBytes?: string;

  /**
   * <p>The date and time the client connection was terminated.</p>
   */
  ConnectionEndTime?: string;

  /**
   * <p>The number of packets sent by the client.</p>
   */
  IngressPackets?: string;

  /**
   * <p>The current state of the client connection.</p>
   */
  Status?: ClientVpnConnectionStatus;
}

export namespace ClientVpnConnection {
  export const filterSensitiveLog = (obj: ClientVpnConnection): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnConnectionsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the active and terminated client connections.</p>
   */
  Connections?: ClientVpnConnection[];
}

export namespace DescribeClientVpnConnectionsResult {
  export const filterSensitiveLog = (obj: DescribeClientVpnConnectionsResult): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnEndpointsRequest {
  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>endpoint-id</code> - The ID of the Client VPN endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transport-protocol</code> - The transport protocol (<code>tcp</code> |
   *                     <code>udp</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeClientVpnEndpointsRequest {
  export const filterSensitiveLog = (obj: DescribeClientVpnEndpointsRequest): any => ({
    ...obj,
  });
}

export type AssociatedNetworkType = "vpc";

/**
 * <p>Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.</p>
 */
export interface AssociatedTargetNetwork {
  /**
   * <p>The target network type.</p>
   */
  NetworkType?: AssociatedNetworkType | string;

  /**
   * <p>The ID of the subnet.</p>
   */
  NetworkId?: string;
}

export namespace AssociatedTargetNetwork {
  export const filterSensitiveLog = (obj: AssociatedTargetNetwork): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Active Directory.</p>
 */
export interface DirectoryServiceAuthentication {
  /**
   * <p>The ID of the Active Directory used for authentication.</p>
   */
  DirectoryId?: string;
}

export namespace DirectoryServiceAuthentication {
  export const filterSensitiveLog = (obj: DirectoryServiceAuthentication): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the IAM SAML identity providers used for federated authentication.</p>
 */
export interface FederatedAuthentication {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider.</p>
   */
  SamlProviderArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.</p>
   */
  SelfServiceSamlProviderArn?: string;
}

export namespace FederatedAuthentication {
  export const filterSensitiveLog = (obj: FederatedAuthentication): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the client certificate used for authentication.</p>
 */
export interface CertificateAuthentication {
  /**
   * <p>The ARN of the client certificate. </p>
   */
  ClientRootCertificateChain?: string;
}

export namespace CertificateAuthentication {
  export const filterSensitiveLog = (obj: CertificateAuthentication): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the authentication methods used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html">Authentication</a>
 * 			in the <i>AWS Client VPN Administrator Guide</i>.</p>
 */
export interface ClientVpnAuthentication {
  /**
   * <p>The authentication type used.</p>
   */
  Type?: ClientVpnAuthenticationType | string;

  /**
   * <p>Information about the authentication certificates, if applicable.</p>
   */
  MutualAuthentication?: CertificateAuthentication;

  /**
   * <p>Information about the Active Directory, if applicable.</p>
   */
  ActiveDirectory?: DirectoryServiceAuthentication;

  /**
   * <p>Information about the IAM SAML identity provider, if applicable.</p>
   */
  FederatedAuthentication?: FederatedAuthentication;
}

export namespace ClientVpnAuthentication {
  export const filterSensitiveLog = (obj: ClientVpnAuthentication): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the client connection logging options for a Client VPN endpoint.</p>
 */
export interface ConnectionLogResponseOptions {
  /**
   * <p>The name of the Amazon CloudWatch Logs log stream to which connection logging data is published.</p>
   */
  CloudwatchLogStream?: string;

  /**
   * <p>Indicates whether client connection logging is enabled for the Client VPN endpoint.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The name of the Amazon CloudWatch Logs log group to which connection logging data is published.</p>
   */
  CloudwatchLogGroup?: string;
}

export namespace ConnectionLogResponseOptions {
  export const filterSensitiveLog = (obj: ConnectionLogResponseOptions): any => ({
    ...obj,
  });
}

export type VpnProtocol = "openvpn";

/**
 * <p>Describes a Client VPN endpoint.</p>
 */
export interface ClientVpnEndpoint {
  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;

  /**
   * <p>Information about the authentication method used by the Client VPN endpoint.</p>
   */
  AuthenticationOptions?: ClientVpnAuthentication[];

  /**
   * <p>A brief description of the endpoint.</p>
   */
  Description?: string;

  /**
   * <p>The IDs of the security groups for the target network.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The URL of the self-service portal.</p>
   */
  SelfServicePortalUrl?: string;

  /**
   * <p>The transport protocol used by the Client VPN endpoint.</p>
   */
  TransportProtocol?: TransportProtocol | string;

  /**
   * <p>The port number for the  Client VPN endpoint.</p>
   */
  VpnPort?: number;

  /**
   * <p>The date and time the Client VPN endpoint was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>Information about the DNS servers to be used for DNS resolution. </p>
   */
  DnsServers?: string[];

  /**
   * <p>The protocol used by the VPN session.</p>
   */
  VpnProtocol?: VpnProtocol | string;

  /**
   * <p>Information about the client connection logging options for the Client VPN endpoint.</p>
   */
  ConnectionLogOptions?: ConnectionLogResponseOptions;

  /**
   * <p>The IPv4 address range, in CIDR notation, from which client IP addresses are assigned.</p>
   */
  ClientCidrBlock?: string;

  /**
   * <p>The DNS name to be used by clients when connecting to the Client VPN endpoint.</p>
   */
  DnsName?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Information about the associated target networks. A target network is a subnet in a VPC.</p>
   */
  AssociatedTargetNetworks?: AssociatedTargetNetwork[];

  /**
   * <p>Indicates whether split-tunnel is enabled in the AWS Client VPN endpoint.</p>
   * 		       <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-Tunnel AWS Client VPN Endpoint</a> in the <i>AWS
   * 				Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * <p>The ARN of the server certificate.</p>
   */
  ServerCertificateArn?: string;

  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The date and time the Client VPN endpoint was deleted, if applicable.</p>
   */
  DeletionTime?: string;

  /**
   * <p>Any tags assigned to the Client VPN endpoint.</p>
   */
  Tags?: Tag[];
}

export namespace ClientVpnEndpoint {
  export const filterSensitiveLog = (obj: ClientVpnEndpoint): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnEndpointsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the Client VPN endpoints.</p>
   */
  ClientVpnEndpoints?: ClientVpnEndpoint[];
}

export namespace DescribeClientVpnEndpointsResult {
  export const filterSensitiveLog = (obj: DescribeClientVpnEndpointsResult): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnRoutesRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>destination-cidr</code> - The CIDR of the route destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>origin</code> - How the route was associated with the Client VPN endpoint (<code>associate</code> | <code>add-route</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-subnet</code> - The ID of the subnet through which traffic is routed.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeClientVpnRoutesRequest {
  export const filterSensitiveLog = (obj: DescribeClientVpnRoutesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a Client VPN endpoint route.</p>
 */
export interface ClientVpnRoute {
  /**
   * <p>The IPv4 address range, in CIDR notation, of the route destination.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;

  /**
   * <p>The route type.</p>
   */
  Type?: string;

  /**
   * <p>A brief description of the route.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the Client VPN endpoint with which the route is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The ID of the subnet through which traffic is routed.</p>
   */
  TargetSubnet?: string;

  /**
   * <p>Indicates how the route was associated with the Client VPN endpoint.
   * 			<code>associate</code> indicates that the route was automatically added when the target network
   * 			was associated with the Client VPN endpoint. <code>add-route</code> indicates that the route
   * 			was manually added using the <b>CreateClientVpnRoute</b> action.</p>
   */
  Origin?: string;
}

export namespace ClientVpnRoute {
  export const filterSensitiveLog = (obj: ClientVpnRoute): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnRoutesResult {
  /**
   * <p>Information about the Client VPN endpoint routes.</p>
   */
  Routes?: ClientVpnRoute[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeClientVpnRoutesResult {
  export const filterSensitiveLog = (obj: DescribeClientVpnRoutesResult): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnTargetNetworksRequest {
  /**
   * <p>The IDs of the target network associations.</p>
   */
  AssociationIds?: string[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-network-id</code> - The ID of the subnet specified as the target network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC in which the target network is located.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;
}

export namespace DescribeClientVpnTargetNetworksRequest {
  export const filterSensitiveLog = (obj: DescribeClientVpnTargetNetworksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a target network associated with a Client VPN endpoint.</p>
 */
export interface TargetNetwork {
  /**
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the Client VPN endpoint with which the target network is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: AssociationStatus;

  /**
   * <p>The IDs of the security groups applied to the target network association.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The ID of the subnet specified as the target network.</p>
   */
  TargetNetworkId?: string;

  /**
   * <p>The ID of the VPC in which the target network (subnet) is located.</p>
   */
  VpcId?: string;
}

export namespace TargetNetwork {
  export const filterSensitiveLog = (obj: TargetNetwork): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnTargetNetworksResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the associated target networks.</p>
   */
  ClientVpnTargetNetworks?: TargetNetwork[];
}

export namespace DescribeClientVpnTargetNetworksResult {
  export const filterSensitiveLog = (obj: DescribeClientVpnTargetNetworksResult): any => ({
    ...obj,
  });
}

export interface DescribeCoipPoolsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-pool.pool-id</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-pool.local-gateway-route-table-id</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the address pools.</p>
   */
  PoolIds?: string[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeCoipPoolsRequest {
  export const filterSensitiveLog = (obj: DescribeCoipPoolsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a customer-owned address pool.</p>
 */
export interface CoipPool {
  /**
   * <p>The ARN of the address pool.</p>
   */
  PoolArn?: string;

  /**
   * <p>The address ranges of the address pool.</p>
   */
  PoolCidrs?: string[];

  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export namespace CoipPool {
  export const filterSensitiveLog = (obj: CoipPool): any => ({
    ...obj,
  });
}

export interface DescribeCoipPoolsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the address pools.</p>
   */
  CoipPools?: CoipPool[];
}

export namespace DescribeCoipPoolsResult {
  export const filterSensitiveLog = (obj: DescribeCoipPoolsResult): any => ({
    ...obj,
  });
}

export interface DescribeConversionTasksRequest {
  /**
   * <p>The conversion task IDs.</p>
   */
  ConversionTaskIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeConversionTasksRequest {
  export const filterSensitiveLog = (obj: DescribeConversionTasksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a disk image.</p>
 */
export interface DiskImageDescription {
  /**
   * <p>The disk image format.</p>
   */
  Format?: DiskImageFormat | string;

  /**
   * <p>The checksum computed for the disk image.</p>
   */
  Checksum?: string;

  /**
   * <p>The size of the disk image, in GiB.</p>
   */
  Size?: number;

  /**
   * <p>A presigned URL for the import manifest stored in Amazon S3. For information about creating a presigned URL for
   *    an Amazon S3 object, read the "Query String Request Authentication Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in
   *    the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   */
  ImportManifestUrl?: string;
}

export namespace DiskImageDescription {
  export const filterSensitiveLog = (obj: DiskImageDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a disk image volume.</p>
 */
export interface DiskImageVolumeDescription {
  /**
   * <p>The size of the volume, in GiB.</p>
   */
  Size?: number;

  /**
   * <p>The volume identifier.</p>
   */
  Id?: string;
}

export namespace DiskImageVolumeDescription {
  export const filterSensitiveLog = (obj: DiskImageVolumeDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an import volume task.</p>
 */
export interface ImportInstanceVolumeDetailItem {
  /**
   * <p>The volume.</p>
   */
  Volume?: DiskImageVolumeDescription;

  /**
   * <p>The image.</p>
   */
  Image?: DiskImageDescription;

  /**
   * <p>The status information or errors related to the disk image.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The Availability Zone where the resulting instance will reside.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A description of the task.</p>
   */
  Description?: string;

  /**
   * <p>The status of the import of this particular disk image.</p>
   */
  Status?: string;

  /**
   * <p>The number of bytes converted so far.</p>
   */
  BytesConverted?: number;
}

export namespace ImportInstanceVolumeDetailItem {
  export const filterSensitiveLog = (obj: ImportInstanceVolumeDetailItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an import instance task.</p>
 */
export interface ImportInstanceTaskDetails {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>A description of the task.</p>
   */
  Description?: string;

  /**
   * <p>The volumes.</p>
   */
  Volumes?: ImportInstanceVolumeDetailItem[];

  /**
   * <p>The instance operating system.</p>
   */
  Platform?: PlatformValues | string;
}

export namespace ImportInstanceTaskDetails {
  export const filterSensitiveLog = (obj: ImportInstanceTaskDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an import volume task.</p>
 */
export interface ImportVolumeTaskDetails {
  /**
   * <p>The description you provided when starting the import volume task.</p>
   */
  Description?: string;

  /**
   * <p>The volume.</p>
   */
  Volume?: DiskImageVolumeDescription;

  /**
   * <p>The image.</p>
   */
  Image?: DiskImageDescription;

  /**
   * <p>The Availability Zone where the resulting volume will reside.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of bytes converted so far.</p>
   */
  BytesConverted?: number;
}

export namespace ImportVolumeTaskDetails {
  export const filterSensitiveLog = (obj: ImportVolumeTaskDetails): any => ({
    ...obj,
  });
}

export type ConversionTaskState = "active" | "cancelled" | "cancelling" | "completed";

/**
 * <p>Describes a conversion task.</p>
 */
export interface ConversionTask {
  /**
   * <p>The time when the task expires. If the upload isn't complete before the expiration time, we automatically cancel
   *    the task.</p>
   */
  ExpirationTime?: string;

  /**
   * <p>The state of the conversion task.</p>
   */
  State?: ConversionTaskState | string;

  /**
   * <p>Any tags assigned to the task.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The status message related to the conversion task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The ID of the conversion task.</p>
   */
  ConversionTaskId?: string;

  /**
   * <p>If the task is for importing a volume, this contains information about the import volume task.</p>
   */
  ImportVolume?: ImportVolumeTaskDetails;

  /**
   * <p>If the task is for importing an instance, this contains information about the import instance task.</p>
   */
  ImportInstance?: ImportInstanceTaskDetails;
}

export namespace ConversionTask {
  export const filterSensitiveLog = (obj: ConversionTask): any => ({
    ...obj,
  });
}

export interface DescribeConversionTasksResult {
  /**
   * <p>Information about the conversion tasks.</p>
   */
  ConversionTasks?: ConversionTask[];
}

export namespace DescribeConversionTasksResult {
  export const filterSensitiveLog = (obj: DescribeConversionTasksResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeCustomerGateways.</p>
 */
export interface DescribeCustomerGatewaysRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>bgp-asn</code> - The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway-id</code> - The ID of the customer gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ip-address</code> - The IP address of the customer gateway's Internet-routable external interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the customer gateway (<code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>type</code> - The type of customer gateway. Currently, the only supported type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more customer gateway IDs.</p>
   *         <p>Default: Describes all your customer gateways.</p>
   */
  CustomerGatewayIds?: string[];
}

export namespace DescribeCustomerGatewaysRequest {
  export const filterSensitiveLog = (obj: DescribeCustomerGatewaysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeCustomerGateways.</p>
 */
export interface DescribeCustomerGatewaysResult {
  /**
   * <p>Information about one or more customer gateways.</p>
   */
  CustomerGateways?: CustomerGateway[];
}

export namespace DescribeCustomerGatewaysResult {
  export const filterSensitiveLog = (obj: DescribeCustomerGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeDhcpOptionsRequest {
  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 		             <p>
   *                   <code>dhcp-options-id</code> - The ID of a DHCP options set.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>key</code> - The key for one of the options (for example, <code>domain-name</code>).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>value</code> - The value for one of the options.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>owner-id</code> - The ID of the AWS account that owns the DHCP options set.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 		          </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of one or more DHCP options sets.</p>
   * 		       <p>Default: Describes all your DHCP options sets.</p>
   */
  DhcpOptionsIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeDhcpOptionsRequest {
  export const filterSensitiveLog = (obj: DescribeDhcpOptionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDhcpOptionsResult {
  /**
   * <p>Information about one or more DHCP options sets.</p>
   */
  DhcpOptions?: DhcpOptions[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeDhcpOptionsResult {
  export const filterSensitiveLog = (obj: DescribeDhcpOptionsResult): any => ({
    ...obj,
  });
}

export interface DescribeEgressOnlyInternetGatewaysRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more egress-only internet gateway IDs.</p>
   */
  EgressOnlyInternetGatewayIds?: string[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *     	    <ul>
   *             <li>
   *     			        <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *     		      </li>
   *             <li>
   *     			        <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *     		      </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeEgressOnlyInternetGatewaysRequest {
  export const filterSensitiveLog = (obj: DescribeEgressOnlyInternetGatewaysRequest): any => ({
    ...obj,
  });
}

export interface DescribeEgressOnlyInternetGatewaysResult {
  /**
   * <p>Information about the egress-only internet gateways.</p>
   */
  EgressOnlyInternetGateways?: EgressOnlyInternetGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeEgressOnlyInternetGatewaysResult {
  export const filterSensitiveLog = (obj: DescribeEgressOnlyInternetGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeElasticGpusRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone in which the
   *                     Elastic Graphics accelerator resides.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>elastic-gpu-health</code> - The status of the Elastic Graphics accelerator
   *                         (<code>OK</code> | <code>IMPAIRED</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>elastic-gpu-state</code> - The state of the Elastic Graphics accelerator
   *                         (<code>ATTACHED</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>elastic-gpu-type</code> - The type of Elastic Graphics accelerator; for example,
   *                         <code>eg1.medium</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-id</code> - The ID of the instance to which the
   *                     Elastic Graphics accelerator is associated.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Elastic Graphics accelerator IDs.</p>
   */
  ElasticGpuIds?: string[];
}

export namespace DescribeElasticGpusRequest {
  export const filterSensitiveLog = (obj: DescribeElasticGpusRequest): any => ({
    ...obj,
  });
}

export enum ElasticGpuStatus {
  Impaired = "IMPAIRED",
  Ok = "OK",
}

/**
 * <p>Describes the status of an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuHealth {
  /**
   * <p>The health status.</p>
   */
  Status?: ElasticGpuStatus | string;
}

export namespace ElasticGpuHealth {
  export const filterSensitiveLog = (obj: ElasticGpuHealth): any => ({
    ...obj,
  });
}

export enum ElasticGpuState {
  Attached = "ATTACHED",
}

/**
 * <p>Describes an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpus {
  /**
   * <p>The state of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuState?: ElasticGpuState | string;

  /**
   * <p>The tags assigned to the Elastic Graphics accelerator.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The status of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuHealth?: ElasticGpuHealth;

  /**
   * <p>The ID of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuId?: string;

  /**
   * <p>The Availability Zone in the which the Elastic Graphics accelerator resides.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The type of Elastic Graphics accelerator.</p>
   */
  ElasticGpuType?: string;

  /**
   * <p>The ID of the instance to which the Elastic Graphics accelerator is attached.</p>
   */
  InstanceId?: string;
}

export namespace ElasticGpus {
  export const filterSensitiveLog = (obj: ElasticGpus): any => ({
    ...obj,
  });
}

export interface DescribeElasticGpusResult {
  /**
   * <p>Information about the Elastic Graphics accelerators.</p>
   */
  ElasticGpuSet?: ElasticGpus[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of items to return. If the total number of items available is more
   *             than the value specified in max-items then a Next-Token will be provided in the output
   *             that you can use to resume pagination.</p>
   */
  MaxResults?: number;
}

export namespace DescribeElasticGpusResult {
  export const filterSensitiveLog = (obj: DescribeElasticGpusResult): any => ({
    ...obj,
  });
}

export interface DescribeExportImageTasksRequest {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token that indicates the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Filter tasks using the <code>task-state</code> filter and one of the following values: <code>active</code>,
   *     <code>completed</code>, <code>deleting</code>, or <code>deleted</code>.</p>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the export image tasks.</p>
   */
  ExportImageTaskIds?: string[];
}

export namespace DescribeExportImageTasksRequest {
  export const filterSensitiveLog = (obj: DescribeExportImageTasksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination for an export image task.</p>
 */
export interface ExportTaskS3Location {
  /**
   * <p>The destination Amazon S3 bucket.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The prefix (logical hierarchy) in the bucket.</p>
   */
  S3Prefix?: string;
}

export namespace ExportTaskS3Location {
  export const filterSensitiveLog = (obj: ExportTaskS3Location): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an export image task.</p>
 */
export interface ExportImageTask {
  /**
   * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
   *     <code>deleting</code>, and <code>deleted</code>.</p>
   */
  Status?: string;

  /**
   * <p>The ID of the export image task.</p>
   */
  ExportImageTaskId?: string;

  /**
   * <p>Any tags assigned to the image being exported.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>Information about the destination Amazon S3 bucket.</p>
   */
  S3ExportLocation?: ExportTaskS3Location;

  /**
   * <p>The percent complete of the export image task.</p>
   */
  Progress?: string;

  /**
   * <p>The status message for the export image task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>A description of the image being exported.</p>
   */
  Description?: string;
}

export namespace ExportImageTask {
  export const filterSensitiveLog = (obj: ExportImageTask): any => ({
    ...obj,
  });
}

export interface DescribeExportImageTasksResult {
  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the export image tasks.</p>
   */
  ExportImageTasks?: ExportImageTask[];
}

export namespace DescribeExportImageTasksResult {
  export const filterSensitiveLog = (obj: DescribeExportImageTasksResult): any => ({
    ...obj,
  });
}

export interface DescribeExportTasksRequest {
  /**
   * <p>the filters for the export tasks.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The export task IDs.</p>
   */
  ExportTaskIds?: string[];
}

export namespace DescribeExportTasksRequest {
  export const filterSensitiveLog = (obj: DescribeExportTasksRequest): any => ({
    ...obj,
  });
}

export interface DescribeExportTasksResult {
  /**
   * <p>Information about the export tasks.</p>
   */
  ExportTasks?: ExportTask[];
}

export namespace DescribeExportTasksResult {
  export const filterSensitiveLog = (obj: DescribeExportTasksResult): any => ({
    ...obj,
  });
}

export interface DescribeFastSnapshotRestoresRequest {
  /**
   * <p>The filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code>: The Availability Zone of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The ID of the AWS account that enabled fast snapshot restore on the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code>: The ID of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code>: The state of fast snapshot restores for the snapshot
   *          (<code>enabling</code> |
   *           <code>optimizing</code> |
   *           <code>enabled</code> |
   *           <code>disabling</code> |
   *           <code>disabled</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeFastSnapshotRestoresRequest {
  export const filterSensitiveLog = (obj: DescribeFastSnapshotRestoresRequest): any => ({
    ...obj,
  });
}

export type FastSnapshotRestoreStateCode = "disabled" | "disabling" | "enabled" | "enabling" | "optimizing";

/**
 * <p>Describes fast snapshot restores for a snapshot.</p>
 */
export interface DescribeFastSnapshotRestoreSuccessItem {
  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * <p>The state of fast snapshot restores.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * <p>The reason for the state transition. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated</code> - The state successfully transitioned to <code>enabling</code> or
   *           <code>disabling</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated - Lifecycle state transition</code> - The state successfully transitioned
   *           to <code>optimizing</code>, <code>enabled</code>, or <code>disabled</code>.</p>
   *             </li>
   *          </ul>
   */
  StateTransitionReason?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * <p>The AWS owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the AWS account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;
}

export namespace DescribeFastSnapshotRestoreSuccessItem {
  export const filterSensitiveLog = (obj: DescribeFastSnapshotRestoreSuccessItem): any => ({
    ...obj,
  });
}

export interface DescribeFastSnapshotRestoresResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the state of fast snapshot restores.</p>
   */
  FastSnapshotRestores?: DescribeFastSnapshotRestoreSuccessItem[];
}

export namespace DescribeFastSnapshotRestoresResult {
  export const filterSensitiveLog = (obj: DescribeFastSnapshotRestoresResult): any => ({
    ...obj,
  });
}

export enum FleetEventType {
  FLEET_CHANGE = "fleet-change",
  INSTANCE_CHANGE = "instance-change",
  SERVICE_ERROR = "service-error",
}

export interface DescribeFleetHistoryRequest {
  /**
   * <p>The type of events to describe. By default, all events are described.</p>
   */
  EventType?: FleetEventType | string;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1 and
   *          1000. The default value is 1000. To retrieve the remaining results, make another call with
   *          the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>The start date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime: Date | undefined;
}

export namespace DescribeFleetHistoryRequest {
  export const filterSensitiveLog = (obj: DescribeFleetHistoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EC2 Fleet or Spot Fleet event.</p>
 */
export interface EventInformation {
  /**
   * <p>The description of the event.</p>
   */
  EventDescription?: string;

  /**
   * <p>The event.</p>
   *
   *          <p>The following are the <code>error</code> events:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                     <code>iamFleetRoleInvalid</code> - The EC2 Fleet or Spot Fleet did not have the required
   *                     permissions either to launch or terminate an instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spotFleetRequestConfigurationInvalid</code> - The configuration is not valid. For more information, see the description
   *           of the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spotInstanceCountLimitExceeded</code> - You've reached the limit on the number
   *           of Spot Instances that you can launch.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following are the <code>fleetRequestChange</code> events:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                     <code>active</code> - The EC2 Fleet or Spot Fleet request has been validated and Amazon EC2 is
   *                     attempting to maintain the target number of running Spot Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>cancelled</code> - The EC2 Fleet or Spot Fleet request is canceled and has no running
   *                     Spot Instances. The EC2 Fleet or Spot Fleet will be deleted two days after its instances
   *                     were terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>cancelled_running</code> - The EC2 Fleet or Spot Fleet request is canceled and does
   *                     not launch additional Spot Instances. Existing Spot Instances continue to run
   *                     until they are interrupted or terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>cancelled_terminating</code> - The EC2 Fleet or Spot Fleet request is canceled and
   *                     its Spot Instances are terminating.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>expired</code> - The EC2 Fleet or Spot Fleet request has expired. A subsequent event
   *                     indicates that the instances were terminated, if the request was created with
   *                         <code>TerminateInstancesWithExpiration</code> set.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>modify_in_progress</code> - A request to modify the EC2 Fleet or Spot Fleet request
   *                     was accepted and is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>modify_successful</code> - The EC2 Fleet or Spot Fleet request was modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>price_update</code> - The price for a launch configuration was adjusted because
   *           it was too high. This change is permanent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>submitted</code> - The EC2 Fleet or Spot Fleet request is being evaluated and Amazon EC2
   *                     is preparing to launch the target number of Spot Instances.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following are the <code>instanceChange</code> events:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>launched</code> - A request was fulfilled and a new instance was launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>terminated</code> - An instance was terminated by the user.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following are the <code>Information</code> events:</p>
   *          <ul>
   *             <li>
   *                 <p>
   *                   <code>launchSpecTemporarilyBlacklisted</code> - The configuration is not valid
   *                     and several attempts to launch instances have failed. For more information, see
   *                     the description of the event.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>launchSpecUnusable</code> - The price in a launch specification is not valid because it is
   *                   below the Spot price or the Spot price is above the On-Demand price.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>fleetProgressHalted</code> - The price in every launch specification is not valid. A launch
   *                   specification might become valid if the Spot price changes.</p>
   *             </li>
   *          </ul>
   */
  EventSubType?: string;

  /**
   * <p>The ID of the instance. This information is available only for <code>instanceChange</code> events.</p>
   */
  InstanceId?: string;
}

export namespace EventInformation {
  export const filterSensitiveLog = (obj: EventInformation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an event in the history of an EC2 Fleet.</p>
 */
export interface HistoryRecordEntry {
  /**
   * <p>The date and time of the event, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;

  /**
   * <p>Information about the event.</p>
   */
  EventInformation?: EventInformation;

  /**
   * <p>The event type.</p>
   */
  EventType?: FleetEventType | string;
}

export namespace HistoryRecordEntry {
  export const filterSensitiveLog = (obj: HistoryRecordEntry): any => ({
    ...obj,
  });
}

export interface DescribeFleetHistoryResult {
  /**
   * <p>The ID of the EC Fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the events in the history of the EC2 Fleet.</p>
   */
  HistoryRecords?: HistoryRecordEntry[];

  /**
   * <p>The last date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          All records up to this time were retrieved.</p>
   *          <p>If <code>nextToken</code> indicates that there are more results, this value is not
   *          present.</p>
   */
  LastEvaluatedTime?: Date;

  /**
   * <p>The start date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;
}

export namespace DescribeFleetHistoryResult {
  export const filterSensitiveLog = (obj: DescribeFleetHistoryResult): any => ({
    ...obj,
  });
}

export interface DescribeFleetInstancesRequest {
  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1 and
   *          1000. The default value is 1000. To retrieve the remaining results, make another call with
   *          the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeFleetInstancesRequest {
  export const filterSensitiveLog = (obj: DescribeFleetInstancesRequest): any => ({
    ...obj,
  });
}

export interface DescribeFleetInstancesResult {
  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The running instances. This list is refreshed periodically and might be out of
   *          date.</p>
   */
  ActiveInstances?: ActiveInstance[];

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export namespace DescribeFleetInstancesResult {
  export const filterSensitiveLog = (obj: DescribeFleetInstancesResult): any => ({
    ...obj,
  });
}

export interface DescribeFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the EC2 Fleets.</p>
   */
  FleetIds?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>activity-status</code> - The progress of the EC2 Fleet ( <code>error</code> |
   *                   <code>pending-fulfillment</code> | <code>pending-termination</code> |
   *                   <code>fulfilled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>excess-capacity-termination-policy</code> - Indicates whether to terminate
   *                running instances if the target capacity is decreased below the current EC2 Fleet size
   *                   (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fleet-state</code> - The state of the EC2 Fleet (<code>submitted</code> |
   *                   <code>active</code> | <code>deleted</code> | <code>failed</code> |
   *                   <code>deleted-running</code> | <code>deleted-terminating</code> |
   *                   <code>modifying</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>replace-unhealthy-instances</code> - Indicates whether EC2 Fleet should replace
   *                unhealthy instances (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of request (<code>instant</code> |
   *                   <code>request</code> | <code>maintain</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1 and
   *          1000. The default value is 1000. To retrieve the remaining results, make another call with
   *          the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeFleetsRequest {
  export const filterSensitiveLog = (obj: DescribeFleetsRequest): any => ({
    ...obj,
  });
}

export enum FleetActivityStatus {
  ERROR = "error",
  FULFILLED = "fulfilled",
  PENDING_FULFILLMENT = "pending_fulfillment",
  PENDING_TERMINATION = "pending_termination",
}

/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 */
export interface DescribeFleetError {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * <p>The error code that indicates why the instance could not be launched. For more
   *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that describes why the instance could not be launched. For more
   *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>Indicates if the instance that could not be launched was a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle | string;
}

export namespace DescribeFleetError {
  export const filterSensitiveLog = (obj: DescribeFleetError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the instances that were launched by the fleet.</p>
 */
export interface DescribeFleetsInstances {
  /**
   * <p>Indicates if the instance that was launched is a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle | string;

  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The value is <code>Windows</code> for Windows instances. Otherwise, the value is
   *          blank.</p>
   */
  Platform?: PlatformValues | string;
}

export namespace DescribeFleetsInstances {
  export const filterSensitiveLog = (obj: DescribeFleetsInstances): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface FleetLaunchTemplateConfig {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   */
  Overrides?: FleetLaunchTemplateOverrides[];
}

export namespace FleetLaunchTemplateConfig {
  export const filterSensitiveLog = (obj: FleetLaunchTemplateConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand
 *          capacity.</p>
 *          <note>
 *             <p>This strategy can only be used if the EC2 Fleet is of type
 *             <code>instant</code>.</p>
 *          </note>
 *          <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity
 *             Reservations</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For examples of using
 *          Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet Example
 *             Configurations</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface CapacityReservationOptions {
  /**
   * <p>Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.</p>
   *          <p>If you specify <code>use-capacity-reservations-first</code>, the fleet uses unused
   *          Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If
   *          multiple instance pools have unused Capacity Reservations, the On-Demand allocation
   *          strategy (<code>lowest-price</code> or <code>prioritized</code>) is applied. If the number
   *          of unused Capacity Reservations is less than the On-Demand target capacity, the remaining
   *          On-Demand target capacity is launched according to the On-Demand allocation strategy
   *             (<code>lowest-price</code> or <code>prioritized</code>).</p>
   *          <p>If you do not specify a value, the fleet fulfils the On-Demand capacity according to the
   *          chosen On-Demand allocation strategy.</p>
   */
  UsageStrategy?: FleetCapacityReservationUsageStrategy | string;
}

export namespace CapacityReservationOptions {
  export const filterSensitiveLog = (obj: CapacityReservationOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 */
export interface OnDemandOptions {
  /**
   * <p>The order of the launch template overrides to use in fulfilling On-Demand capacity. If
   *          you specify <code>lowest-price</code>, EC2 Fleet uses price to determine the order, launching
   *          the lowest price first. If you specify <code>prioritized</code>, EC2 Fleet uses the priority
   *          that you assigned to each launch template override, launching the highest priority first.
   *          If you do not specify a value, EC2 Fleet defaults to <code>lowest-price</code>.</p>
   */
  AllocationStrategy?: FleetOnDemandAllocationStrategy | string;

  /**
   * <p>Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the fleet.
   *          Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * <p>The strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
   *          Supported only for fleets of type <code>instant</code>.</p>
   */
  CapacityReservationOptions?: CapacityReservationOptions;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay.</p>
   */
  MaxTotalPrice?: string;

  /**
   * <p>Indicates that the fleet launches all On-Demand Instances into a single Availability Zone. Supported
   *          only for fleets of type <code>instant</code>.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * <p>The minimum target capacity for On-Demand Instances in the fleet. If the minimum target capacity is
   *          not reached, the fleet launches no instances.</p>
   */
  MinTargetCapacity?: number;
}

export namespace OnDemandOptions {
  export const filterSensitiveLog = (obj: OnDemandOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
 */
export interface SpotOptions {
  /**
   * <p>Indicates how to allocate the target Spot Instance capacity across the Spot Instance pools specified by
   *          the EC2 Fleet.</p>
   *          <p>If the allocation strategy is <code>lowest-price</code>, EC2 Fleet launches instances from
   *          the Spot Instance pools with the lowest price. This is the default allocation strategy.</p>
   *          <p>If the allocation strategy is <code>diversified</code>, EC2 Fleet launches instances from all
   *          of the Spot Instance pools that you specify.</p>
   *          <p>If the allocation strategy is <code>capacity-optimized</code>, EC2 Fleet launches instances
   *          from Spot Instance pools with optimal capacity for the number of instances that are
   *          launching.</p>
   */
  AllocationStrategy?: SpotAllocationStrategy | string;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Valid only
   *          when <b>AllocationStrategy</b> is set to
   *             <code>lowest-price</code>. EC2 Fleet selects the cheapest Spot pools and evenly allocates
   *          your target Spot capacity across the number of Spot pools that you specify.</p>
   */
  InstancePoolsToUseCount?: number;

  /**
   * <p>Indicates that the fleet uses a single instance type to launch all Spot Instances in the fleet.
   *          Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay.</p>
   */
  MaxTotalPrice?: string;

  /**
   * <p>Indicates that the fleet launches all Spot Instances into a single Availability Zone. Supported
   *          only for fleets of type <code>instant</code>.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * <p>The minimum target capacity for Spot Instances in the fleet. If the minimum target capacity is
   *          not reached, the fleet launches no instances.</p>
   */
  MinTargetCapacity?: number;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | string;
}

export namespace SpotOptions {
  export const filterSensitiveLog = (obj: SpotOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The number of units to request. You can choose to set the target capacity in terms of
 *          instances or a performance characteristic that is important to your application workload,
 *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
 *          specify a target capacity of 0 and add capacity later.</p>
 *          <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance
 *             <code>MaxTotalPrice</code>, or both to ensure that your fleet cost does not exceed your
 *          budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet
 *          will launch instances until it reaches the maximum amount that you're willing to pay. When
 *          the maximum amount you're willing to pay is reached, the fleet stops launching instances
 *          even if it hasn’t met the target capacity. The <code>MaxTotalPrice</code> parameters are
 *          located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptions.html">OnDemandOptions</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptions">SpotOptions</a>
 *          </p>
 */
export interface TargetCapacitySpecification {
  /**
   * <p>The number of units to request, filled using
   *          <code>DefaultTargetCapacityType</code>.</p>
   */
  TotalTargetCapacity?: number;

  /**
   * <p>The maximum number of Spot units to launch. If you specify a target capacity for On-Demand units, you cannot specify a target capacity for Spot units.</p>
   */
  SpotTargetCapacity?: number;

  /**
   * <p>The number of On-Demand units to request. If you specify a target capacity for Spot units, you cannot specify a target capacity for On-Demand units.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * <p>The default <code>TotalTargetCapacity</code>, which is either <code>Spot</code> or
   *             <code>On-Demand</code>.</p>
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType | string;
}

export namespace TargetCapacitySpecification {
  export const filterSensitiveLog = (obj: TargetCapacitySpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EC2 Fleet.</p>
 */
export interface FleetData {
  /**
   * <p>The launch template and overrides.</p>
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfig[];

  /**
   * <p>The start date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          The default is to start fulfilling the request immediately. </p>
   */
  ValidFrom?: Date;

  /**
   * <p>Information about the instances that could not be launched by the fleet. Valid only when
   *             <b>Type</b> is set to <code>instant</code>.</p>
   */
  Errors?: DescribeFleetError[];

  /**
   * <p>The number of units to request. You can choose to set the target capacity in terms of
   *          instances or a performance characteristic that is important to your application workload,
   *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
   *          specify a target capacity of 0 and add capacity later.</p>
   */
  TargetCapacitySpecification?: TargetCapacitySpecification;

  /**
   * <p>Information about the instances that were launched by the fleet. Valid only when
   *             <b>Type</b> is set to <code>instant</code>.</p>
   */
  Instances?: DescribeFleetsInstances[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             Idempotency</a>.</p>
   *          <p>Constraints: Maximum 64 ASCII characters</p>
   */
  ClientToken?: string;

  /**
   * <p>The allocation strategy of On-Demand Instances in an EC2 Fleet.</p>
   */
  OnDemandOptions?: OnDemandOptions;

  /**
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires. </p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * <p>The progress of the EC2 Fleet. If there is an error, the status is <code>error</code>. After
   *          all requests are placed, the status is <code>pending_fulfillment</code>. If the size of the
   *          EC2 Fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
   *          If the size of the EC2 Fleet is decreased, the status is <code>pending_termination</code> while
   *          instances are terminating.</p>
   */
  ActivityStatus?: FleetActivityStatus | string;

  /**
   * <p>The end date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          At this point, no new instance requests are placed or able to fulfill the request. The
   *          default end date is 7 days from the current date. </p>
   */
  ValidUntil?: Date;

  /**
   * <p>Indicates whether running instances should be terminated if the target capacity of the
   *          EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | string;

  /**
   * <p>The type of request. Indicates whether the EC2 Fleet only <code>requests</code> the target
   *          capacity, or also attempts to <code>maintain</code> it. If you request a certain target
   *          capacity, EC2 Fleet only places the required requests; it does not attempt to replenish
   *          instances if capacity is diminished, and it does not submit requests in alternative
   *          capacity pools if capacity is unavailable. To maintain a certain target capacity, EC2 Fleet
   *          places the required requests to meet this target capacity. It also automatically
   *          replenishes any interrupted Spot Instances. Default: <code>maintain</code>.</p>
   */
  Type?: FleetType | string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>The configuration of Spot Instances in an EC2 Fleet.</p>
   */
  SpotOptions?: SpotOptions;

  /**
   * <p>The number of units fulfilled by this request compared to the set target
   *          capacity.</p>
   */
  FulfilledCapacity?: number;

  /**
   * <p>The tags for an EC2 Fleet resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The number of units fulfilled by this request compared to the set target On-Demand
   *          capacity.</p>
   */
  FulfilledOnDemandCapacity?: number;

  /**
   * <p>Indicates whether EC2 Fleet should replace unhealthy instances.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * <p>The state of the EC2 Fleet.</p>
   */
  FleetState?: FleetStateCode | string;

  /**
   * <p>The creation date and time of the EC2 Fleet.</p>
   */
  CreateTime?: Date;
}

export namespace FleetData {
  export const filterSensitiveLog = (obj: FleetData): any => ({
    ...obj,
  });
}

export interface DescribeFleetsResult {
  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the EC2 Fleets.</p>
   */
  Fleets?: FleetData[];
}

export namespace DescribeFleetsResult {
  export const filterSensitiveLog = (obj: DescribeFleetsResult): any => ({
    ...obj,
  });
}

export interface DescribeFlowLogsRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>deliver-log-status</code> - The status of the logs delivery (<code>SUCCESS</code> |
   *                     <code>FAILED</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>log-destination-type</code> - The type of destination to which the flow
   *                     log publishes data. Possible destination types include
   *                     <code>cloud-watch-logs</code> and <code>S3</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>flow-log-id</code> - The ID of the flow log.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>log-group-name</code> - The name of the log group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>resource-id</code> - The ID of the VPC, subnet, or network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>traffic-type</code> - The type of traffic (<code>ACCEPT</code> |
   *                     <code>REJECT</code> | <code>ALL</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more flow log IDs.</p>
   *         <p>Constraint: Maximum of 1000 flow log IDs.</p>
   */
  FlowLogIds?: string[];
}

export namespace DescribeFlowLogsRequest {
  export const filterSensitiveLog = (obj: DescribeFlowLogsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a flow log.</p>
 */
export interface FlowLog {
  /**
   * <p>The date and time the flow log was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The ARN of the IAM role that posts logs to CloudWatch Logs.</p>
   */
  DeliverLogsPermissionArn?: string;

  /**
   * <p>The flow log ID.</p>
   */
  FlowLogId?: string;

  /**
   * <p>Information about the error that occurred. <code>Rate limited</code> indicates that
   *             CloudWatch Logs throttling has been applied for one or more network interfaces, or that you've
   *             reached the limit on the number of log groups that you can create. <code>Access
   *                 error</code> indicates that the IAM role associated with the flow log does not have
   *             sufficient permissions to publish to CloudWatch Logs. <code>Unknown error</code> indicates an
   *             internal error.</p>
   */
  DeliverLogsErrorMessage?: string;

  /**
   * <p>Specifies the destination to which the flow log data is published. Flow log data can be
   *             published to an CloudWatch Logs log group or an Amazon S3 bucket. If the flow log publishes to CloudWatch Logs,
   *             this element indicates the Amazon Resource Name (ARN) of the CloudWatch Logs log group to which
   *             the data is published. If the flow log publishes to Amazon S3, this element indicates the ARN
   *             of the Amazon S3 bucket to which the data is published.</p>
   */
  LogDestination?: string;

  /**
   * <p>Specifies the type of destination to which the flow log data is published. Flow log data can be
   *             published to CloudWatch Logs or Amazon S3.</p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * <p>The ID of the resource on which the flow log was created.</p>
   */
  ResourceId?: string;

  /**
   * <p>The tags for the flow log.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the flow log group.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The format of the flow log record.</p>
   */
  LogFormat?: string;

  /**
   * <p>The status of the logs delivery (<code>SUCCESS</code> | <code>FAILED</code>).</p>
   */
  DeliverLogsStatus?: string;

  /**
   * <p>The type of traffic captured for the flow log.</p>
   */
  TrafficType?: TrafficType | string;

  /**
   * <p>The status of the flow log (<code>ACTIVE</code>).</p>
   */
  FlowLogStatus?: string;

  /**
   * <p>The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record.</p>
   *         <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds (1 minute) or less,
   *             regardless of the specified value.</p>
   *         <p>Valid Values: <code>60</code> | <code>600</code>
   *          </p>
   */
  MaxAggregationInterval?: number;
}

export namespace FlowLog {
  export const filterSensitiveLog = (obj: FlowLog): any => ({
    ...obj,
  });
}

export interface DescribeFlowLogsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the flow logs.</p>
   */
  FlowLogs?: FlowLog[];
}

export namespace DescribeFlowLogsResult {
  export const filterSensitiveLog = (obj: DescribeFlowLogsResult): any => ({
    ...obj,
  });
}

export type FpgaImageAttributeName = "description" | "loadPermission" | "name" | "productCodes";

export interface DescribeFpgaImageAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The AFI attribute.</p>
   */
  Attribute: FpgaImageAttributeName | string | undefined;

  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;
}

export namespace DescribeFpgaImageAttributeRequest {
  export const filterSensitiveLog = (obj: DescribeFpgaImageAttributeRequest): any => ({
    ...obj,
  });
}

export type PermissionGroup = "all";

/**
 * <p>Describes a load permission.</p>
 */
export interface LoadPermission {
  /**
   * <p>The AWS account ID.</p>
   */
  UserId?: string;

  /**
   * <p>The name of the group.</p>
   */
  Group?: PermissionGroup | string;
}

export namespace LoadPermission {
  export const filterSensitiveLog = (obj: LoadPermission): any => ({
    ...obj,
  });
}

export type ProductCodeValues = "devpay" | "marketplace";

/**
 * <p>Describes a product code.</p>
 */
export interface ProductCode {
  /**
   * <p>The type of product code.</p>
   */
  ProductCodeType?: ProductCodeValues | string;

  /**
   * <p>The product code.</p>
   */
  ProductCodeId?: string;
}

export namespace ProductCode {
  export const filterSensitiveLog = (obj: ProductCode): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon FPGA image (AFI) attribute.</p>
 */
export interface FpgaImageAttribute {
  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The load permissions.</p>
   */
  LoadPermissions?: LoadPermission[];

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The name of the AFI.</p>
   */
  Name?: string;

  /**
   * <p>The description of the AFI.</p>
   */
  Description?: string;
}

export namespace FpgaImageAttribute {
  export const filterSensitiveLog = (obj: FpgaImageAttribute): any => ({
    ...obj,
  });
}

export interface DescribeFpgaImageAttributeResult {
  /**
   * <p>Information about the attribute.</p>
   */
  FpgaImageAttribute?: FpgaImageAttribute;
}

export namespace DescribeFpgaImageAttributeResult {
  export const filterSensitiveLog = (obj: DescribeFpgaImageAttributeResult): any => ({
    ...obj,
  });
}

export interface DescribeFpgaImagesRequest {
  /**
   * <p>The AFI IDs.</p>
   */
  FpgaImageIds?: string[];

  /**
   * <p>Filters the AFI by owner. Specify an AWS account ID, <code>self</code> (owner is the sender of the request), or an AWS owner alias (valid values are <code>amazon</code> | <code>aws-marketplace</code>).</p>
   */
  Owners?: string[];

  /**
   * <p>The filters.</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The creation time of the AFI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fpga-image-id</code> - The FPGA image identifier (AFI ID).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fpga-image-global-id</code> - The global FPGA image identifier (AGFI ID).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the AFI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The AWS account ID of the AFI owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shell-version</code> - The version of the AWS Shell that was used to create the bitstream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the AFI (<code>pending</code> | <code>failed</code> | <code>available</code> | <code>unavailable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-time</code> - The time of the most recent update.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeFpgaImagesRequest {
  export const filterSensitiveLog = (obj: DescribeFpgaImagesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.</p>
 */
export interface PciId {
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the vendor for the subsystem.</p>
   */
  SubsystemVendorId?: string;

  /**
   * <p>The ID of the subsystem.</p>
   */
  SubsystemId?: string;

  /**
   * <p>The ID of the vendor.</p>
   */
  VendorId?: string;
}

export namespace PciId {
  export const filterSensitiveLog = (obj: PciId): any => ({
    ...obj,
  });
}

export type FpgaImageStateCode = "available" | "failed" | "pending" | "unavailable";

/**
 * <p>Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).</p>
 */
export interface FpgaImageState {
  /**
   * <p>The state. The following are the possible values:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code> - AFI bitstream generation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code> - The AFI is available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - AFI bitstream generation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unavailable</code> - The AFI is no longer available for use.</p>
   *             </li>
   *          </ul>
   */
  Code?: FpgaImageStateCode | string;

  /**
   * <p>If the state is <code>failed</code>, this is the error message.</p>
   */
  Message?: string;
}

export namespace FpgaImageState {
  export const filterSensitiveLog = (obj: FpgaImageState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon FPGA image (AFI).</p>
 */
export interface FpgaImage {
  /**
   * <p>Any tags assigned to the AFI.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The global FPGA image identifier (AGFI ID).</p>
   */
  FpgaImageGlobalId?: string;

  /**
   * <p>Information about the PCI bus.</p>
   */
  PciId?: PciId;

  /**
   * <p>The time of the most recent update to the AFI.</p>
   */
  UpdateTime?: Date;

  /**
   * <p>The description of the AFI.</p>
   */
  Description?: string;

  /**
   * <p>The AWS account ID of the AFI owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>Indicates whether data retention support is enabled for the AFI.</p>
   */
  DataRetentionSupport?: boolean;

  /**
   * <p>The alias of the AFI owner. Possible values include <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The date and time the AFI was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Indicates whether the AFI is public.</p>
   */
  Public?: boolean;

  /**
   * <p>The FPGA image identifier (AFI ID).</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The version of the AWS Shell that was used to create the bitstream.</p>
   */
  ShellVersion?: string;

  /**
   * <p>The product codes for the AFI.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>Information about the state of the AFI.</p>
   */
  State?: FpgaImageState;

  /**
   * <p>The name of the AFI.</p>
   */
  Name?: string;
}

export namespace FpgaImage {
  export const filterSensitiveLog = (obj: FpgaImage): any => ({
    ...obj,
  });
}

export interface DescribeFpgaImagesResult {
  /**
   * <p>Information about the FPGA images.</p>
   */
  FpgaImages?: FpgaImage[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeFpgaImagesResult {
  export const filterSensitiveLog = (obj: DescribeFpgaImagesResult): any => ({
    ...obj,
  });
}

export interface DescribeHostReservationOfferingsRequest {
  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>instance-family</code> - The instance family of the offering (for example,
   *                         <code>m4</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>payment-option</code> - The payment option (<code>NoUpfront</code> |
   *                         <code>PartialUpfront</code> | <code>AllUpfront</code>).</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>This is the minimum duration of the reservation you'd like to purchase, specified
   *             in seconds. Reservations are available in one-year and three-year terms. The number of
   *             seconds specified must be the number of seconds in a year (365x24x60x60) times one of
   *             the supported durations (1 or 3). For example, specify 31536000 for one year.</p>
   */
  MinDuration?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>This is the maximum duration of the reservation to purchase, specified in seconds.
   *             Reservations are available in one-year and three-year terms. The number of seconds
   *             specified must be the number of seconds in a year (365x24x60x60) times one of the
   *             supported durations (1 or 3). For example, specify 94608000 for three years.</p>
   */
  MaxDuration?: number;

  /**
   * <p>The ID of the reservation offering.</p>
   */
  OfferingId?: string;
}

export namespace DescribeHostReservationOfferingsRequest {
  export const filterSensitiveLog = (obj: DescribeHostReservationOfferingsRequest): any => ({
    ...obj,
  });
}

export enum PaymentOption {
  ALL_UPFRONT = "AllUpfront",
  NO_UPFRONT = "NoUpfront",
  PARTIAL_UPFRONT = "PartialUpfront",
}

/**
 * <p>Details about the Dedicated Host Reservation offering.</p>
 */
export interface HostOffering {
  /**
   * <p>The currency of the offering.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The hourly price of the offering.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family of the offering.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The available payment option.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The ID of the offering.</p>
   */
  OfferingId?: string;

  /**
   * <p>The upfront price of the offering. Does not apply to No Upfront
   *             offerings.</p>
   */
  UpfrontPrice?: string;

  /**
   * <p>The duration of the offering (in seconds).</p>
   */
  Duration?: number;
}

export namespace HostOffering {
  export const filterSensitiveLog = (obj: HostOffering): any => ({
    ...obj,
  });
}

export interface DescribeHostReservationOfferingsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the offerings.</p>
   */
  OfferingSet?: HostOffering[];
}

export namespace DescribeHostReservationOfferingsResult {
  export const filterSensitiveLog = (obj: DescribeHostReservationOfferingsResult): any => ({
    ...obj,
  });
}

export interface DescribeHostReservationsRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>instance-family</code> - The instance family (for example,
   *                     <code>m4</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>payment-option</code> - The payment option (<code>NoUpfront</code> |
   *                         <code>PartialUpfront</code> | <code>AllUpfront</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>state</code> - The state of the reservation (<code>payment-pending</code>
   *                     | <code>payment-failed</code> | <code>active</code> |
   *                     <code>retired</code>).</p>
   *             </li>
   *             <li>
   *         		     <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *         	   </li>
   *             <li>
   *         		     <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *         	   </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The host reservation IDs.</p>
   */
  HostReservationIdSet?: string[];
}

export namespace DescribeHostReservationsRequest {
  export const filterSensitiveLog = (obj: DescribeHostReservationsRequest): any => ({
    ...obj,
  });
}

export enum ReservationState {
  ACTIVE = "active",
  PAYMENT_FAILED = "payment-failed",
  PAYMENT_PENDING = "payment-pending",
  RETIRED = "retired",
}

/**
 * <p>Details about the Dedicated Host Reservation and associated Dedicated
 *             Hosts.</p>
 */
export interface HostReservation {
  /**
   * <p>The date and time that the reservation started.</p>
   */
  Start?: Date;

  /**
   * <p>Any tags assigned to the Dedicated Host Reservation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The instance family of the Dedicated Host Reservation. The instance family on the
   *             Dedicated Host must be the same in order for it to benefit from the
   *             reservation.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The ID of the reservation. This remains the same regardless of which Dedicated
   *             Hosts are associated with it.</p>
   */
  OfferingId?: string;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: string[];

  /**
   * <p>The upfront price of the reservation.</p>
   */
  UpfrontPrice?: string;

  /**
   * <p>The ID of the reservation that specifies the associated Dedicated Hosts.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The currency in which the <code>upfrontPrice</code> and <code>hourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The state of the reservation.</p>
   */
  State?: ReservationState | string;

  /**
   * <p>The payment option selected for this reservation.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The number of Dedicated Hosts the reservation is associated with.</p>
   */
  Count?: number;

  /**
   * <p>The hourly price of the reservation.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The date and time that the reservation ends.</p>
   */
  End?: Date;

  /**
   * <p>The length of the reservation's term, specified in seconds. Can be <code>31536000
   *                 (1 year)</code> | <code>94608000 (3 years)</code>.</p>
   */
  Duration?: number;
}

export namespace HostReservation {
  export const filterSensitiveLog = (obj: HostReservation): any => ({
    ...obj,
  });
}

export interface DescribeHostReservationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Details about the reservation's configuration.</p>
   */
  HostReservationSet?: HostReservation[];
}

export namespace DescribeHostReservationsResult {
  export const filterSensitiveLog = (obj: DescribeHostReservationsResult): any => ({
    ...obj,
  });
}

export interface DescribeHostsRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>auto-placement</code> - Whether auto-placement is enabled or disabled
   *                         (<code>on</code> | <code>off</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone of the
   *                     host.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>client-token</code> - The idempotency token that you provided when you
   *                     allocated the host.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>host-reservation-id</code> - The ID of the reservation assigned to
   *                     this host.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-type</code> - The instance type size that the Dedicated Host
   *                     is configured to support.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The allocation state of the Dedicated Host
   *                         (<code>available</code> | <code>under-assessment</code> |
   *                         <code>permanent-failure</code> | <code>released</code> |
   *                         <code>released-permanent-failure</code>).</p>
   *             </li>
   *             <li>
   *         		     <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *         	   </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   *          <p>You cannot specify this parameter and the host IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The IDs of the Dedicated Hosts. The IDs are used for targeted instance
   *             launches.</p>
   */
  HostIds?: string[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeHostsRequest {
  export const filterSensitiveLog = (obj: DescribeHostsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the number of instances that can be launched onto the Dedicated
 *     		Host.</p>
 */
export interface InstanceCapacity {
  /**
   * <p>The number of instances that can be launched onto the Dedicated Host based on the
   *     		host's available capacity.</p>
   */
  AvailableCapacity?: number;

  /**
   * <p>The total number of instances that can be launched onto the Dedicated Host if there
   *     		are no instances running on it.</p>
   */
  TotalCapacity?: number;

  /**
   * <p>The instance type supported by the Dedicated Host.</p>
   */
  InstanceType?: string;
}

export namespace InstanceCapacity {
  export const filterSensitiveLog = (obj: InstanceCapacity): any => ({
    ...obj,
  });
}

/**
 * <p>The capacity information for instances that can be launched onto the Dedicated Host. </p>
 */
export interface AvailableCapacity {
  /**
   * <p>The number of instances that can be launched onto the Dedicated Host depending on
   *     		the host's available capacity. For Dedicated Hosts that support multiple instance types,
   *     		this parameter represents the number of instances for each instance size that is
   *     		supported on the host.</p>
   */
  AvailableInstanceCapacity?: InstanceCapacity[];

  /**
   * <p>The number of vCPUs available for launching instances onto the Dedicated Host.</p>
   */
  AvailableVCpus?: number;
}

export namespace AvailableCapacity {
  export const filterSensitiveLog = (obj: AvailableCapacity): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the properties of a Dedicated Host.</p>
 */
export interface HostProperties {
  /**
   * <p>The number of cores on the Dedicated Host.</p>
   */
  Cores?: number;

  /**
   * <p>The number of sockets on the Dedicated Host.</p>
   */
  Sockets?: number;

  /**
   * <p>The instance family supported by the Dedicated Host. For example, <code>m5</code>.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The instance type supported by the Dedicated Host. For example, <code>m5.large</code>.
   *         	If the host supports multiple instance types, no <b>instanceType</b>
   *         	is returned.</p>
   */
  InstanceType?: string;

  /**
   * <p>The total number of vCPUs on the Dedicated Host.</p>
   */
  TotalVCpus?: number;
}

export namespace HostProperties {
  export const filterSensitiveLog = (obj: HostProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance running on a Dedicated Host.</p>
 */
export interface HostInstance {
  /**
   * <p>The ID of the AWS account that owns the instance.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of instance that is running on the Dedicated Host.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance type (for example, <code>m3.medium</code>) of the running instance.</p>
   */
  InstanceType?: string;
}

export namespace HostInstance {
  export const filterSensitiveLog = (obj: HostInstance): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the properties of the Dedicated Host.</p>
 */
export interface Host {
  /**
   * <p>The time that the Dedicated Host was allocated.</p>
   */
  AllocationTime?: Date;

  /**
   * <p>Indicates whether the Dedicated Host is in a host resource group. If
   * 			<b>memberOfServiceLinkedResourceGroup</b> is
   * 			<code>true</code>, the host is in a host resource group; otherwise, it is not.</p>
   */
  MemberOfServiceLinkedResourceGroup?: boolean;

  /**
   * <p>Whether auto-placement is on or off.</p>
   */
  AutoPlacement?: AutoPlacement | string;

  /**
   * <p>The ID of the Dedicated Host.</p>
   */
  HostId?: string;

  /**
   * <p>The reservation ID of the Dedicated Host. This returns a <code>null</code> response
   *             if the Dedicated Host doesn't have an associated reservation.</p>
   */
  HostReservationId?: string;

  /**
   * <p>Indicates whether the Dedicated Host supports multiple instance types of the same instance family,
   * 			or a specific instance type only. <code>one</code> indicates that the Dedicated Host supports
   * 			multiple instance types in the instance family. <code>off</code> indicates that the Dedicated
   * 			Host supports a single instance type only.</p>
   */
  AllowsMultipleInstanceTypes?: AllowsMultipleInstanceTypes | string;

  /**
   * <p>The Availability Zone of the Dedicated Host.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The IDs and instance type that are currently running on the Dedicated
   *             Host.</p>
   */
  Instances?: HostInstance[];

  /**
   * <p>The Dedicated Host's state.</p>
   */
  State?: AllocationState | string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Any tags assigned to the Dedicated Host.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The hardware specifications of the Dedicated Host.</p>
   */
  HostProperties?: HostProperties;

  /**
   * <p>The ID of the AWS account that owns the Dedicated Host.</p>
   */
  OwnerId?: string;

  /**
   * <p>Indicates whether host recovery is enabled or disabled for the Dedicated Host.</p>
   */
  HostRecovery?: HostRecovery | string;

  /**
   * <p>The time that the Dedicated Host was released.</p>
   */
  ReleaseTime?: Date;

  /**
   * <p>Information about the instances running on the Dedicated Host.</p>
   */
  AvailableCapacity?: AvailableCapacity;

  /**
   * <p>The ID of the Availability Zone in which the Dedicated Host is allocated.</p>
   */
  AvailabilityZoneId?: string;
}

export namespace Host {
  export const filterSensitiveLog = (obj: Host): any => ({
    ...obj,
  });
}

export interface DescribeHostsResult {
  /**
   * <p>Information about the Dedicated Hosts.</p>
   */
  Hosts?: Host[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeHostsResult {
  export const filterSensitiveLog = (obj: DescribeHostsResult): any => ({
    ...obj,
  });
}

export interface DescribeIamInstanceProfileAssociationsRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association (<code>associating</code> |
   *                 <code>associated</code> | <code>disassociating</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The IAM instance profile associations.</p>
   */
  AssociationIds?: string[];

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeIamInstanceProfileAssociationsRequest {
  export const filterSensitiveLog = (obj: DescribeIamInstanceProfileAssociationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeIamInstanceProfileAssociationsResult {
  /**
   * <p>Information about the IAM instance profile associations.</p>
   */
  IamInstanceProfileAssociations?: IamInstanceProfileAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeIamInstanceProfileAssociationsResult {
  export const filterSensitiveLog = (obj: DescribeIamInstanceProfileAssociationsResult): any => ({
    ...obj,
  });
}

export interface DescribeIdentityIdFormatRequest {
  /**
   * <p>The ARN of the principal, which can be an IAM role, IAM user, or the root user.</p>
   */
  PrincipalArn: string | undefined;

  /**
   * <p>The type of resource: <code>bundle</code> |
   *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *           <code>network-acl</code> | <code>network-acl-association</code> |
   *           <code>network-interface</code> | <code>network-interface-attachment</code> |
   *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *           <code>route-table-association</code> | <code>security-group</code> |
   *           <code>snapshot</code> | <code>subnet</code> |
   *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   */
  Resource?: string;
}

export namespace DescribeIdentityIdFormatRequest {
  export const filterSensitiveLog = (obj: DescribeIdentityIdFormatRequest): any => ({
    ...obj,
  });
}

export interface DescribeIdentityIdFormatResult {
  /**
   * <p>Information about the ID format for the resources.</p>
   */
  Statuses?: IdFormat[];
}

export namespace DescribeIdentityIdFormatResult {
  export const filterSensitiveLog = (obj: DescribeIdentityIdFormatResult): any => ({
    ...obj,
  });
}

export interface DescribeIdFormatRequest {
  /**
   * <p>The type of resource: <code>bundle</code> |
   *            <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *            <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *            <code>network-acl</code> | <code>network-acl-association</code> |
   *            <code>network-interface</code> | <code>network-interface-attachment</code> |
   *            <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *            <code>route-table-association</code> | <code>security-group</code> |
   *            <code>snapshot</code> | <code>subnet</code> |
   *            <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *            | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *            <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   */
  Resource?: string;
}

export namespace DescribeIdFormatRequest {
  export const filterSensitiveLog = (obj: DescribeIdFormatRequest): any => ({
    ...obj,
  });
}

export interface DescribeIdFormatResult {
  /**
   * <p>Information about the ID format for the resource.</p>
   */
  Statuses?: IdFormat[];
}

export namespace DescribeIdFormatResult {
  export const filterSensitiveLog = (obj: DescribeIdFormatResult): any => ({
    ...obj,
  });
}

export type ImageAttributeName =
  | "blockDeviceMapping"
  | "description"
  | "kernel"
  | "launchPermission"
  | "productCodes"
  | "ramdisk"
  | "sriovNetSupport";

/**
 * <p>Contains the parameters for DescribeImageAttribute.</p>
 */
export interface DescribeImageAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The AMI attribute.</p>
   *    	     <p>
   *             <b>Note</b>: Depending on your account privileges, the <code>blockDeviceMapping</code>
   *    		attribute may return a <code>Client.AuthFailure</code> error. If this happens, use
   *    		<a>DescribeImages</a> to get information about the block device mapping for the AMI.</p>
   */
  Attribute: ImageAttributeName | string | undefined;
}

export namespace DescribeImageAttributeRequest {
  export const filterSensitiveLog = (obj: DescribeImageAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch permission.</p>
 */
export interface LaunchPermission {
  /**
   * <p>The AWS account ID.</p>
   */
  UserId?: string;

  /**
   * <p>The name of the group.</p>
   */
  Group?: PermissionGroup | string;
}

export namespace LaunchPermission {
  export const filterSensitiveLog = (obj: LaunchPermission): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an image attribute.</p>
 */
export interface ImageAttribute {
  /**
   * <p>A description for the AMI.</p>
   */
  Description?: AttributeValue;

  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
   */
  SriovNetSupport?: AttributeValue;

  /**
   * <p>The launch permissions.</p>
   */
  LaunchPermissions?: LaunchPermission[];

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The RAM disk ID.</p>
   */
  RamdiskId?: AttributeValue;

  /**
   * <p>The kernel ID.</p>
   */
  KernelId?: AttributeValue;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;
}

export namespace ImageAttribute {
  export const filterSensitiveLog = (obj: ImageAttribute): any => ({
    ...obj,
  });
}

export interface DescribeImagesRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>architecture</code> - The image architecture (<code>i386</code> |
   *             <code>x86_64</code> | <code>arm64</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.delete-on-termination</code> - A Boolean value that indicates
   *           whether the Amazon EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.device-name</code> - The device name specified in the block device mapping (for
   *           example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.snapshot-id</code> - The ID of the snapshot used for the EBS
   *           volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-size</code> - The volume size of the EBS volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-type</code> - The volume type of the EBS volume
   *             (<code>gp2</code> | <code>io1</code> | <code>io2</code> | <code>st1 </code>| <code>sc1</code> |
   *             <code>standard</code>).</p>
   *             </li>
   *             <li>
   *     		         <p>
   *     			           <code>block-device-mapping.encrypted</code> - A Boolean that indicates whether the EBS volume is encrypted.</p>
   *     	       </li>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the image (provided during image
   *           creation).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ena-support</code> - A Boolean that indicates whether enhanced networking
   *           with ENA is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hypervisor</code> - The hypervisor type (<code>ovm</code> |
   *           <code>xen</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-id</code> - The ID of the image.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-type</code> - The image type (<code>machine</code> | <code>kernel</code> |
   *             <code>ramdisk</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-public</code> - A Boolean that indicates whether the image is public.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manifest-location</code> - The location of the image manifest.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the AMI (provided during image creation).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-alias</code> - The owner alias, from an Amazon-maintained list
   *           (<code>amazon</code> | <code>aws-marketplace</code>).
   *           This is not the user-configured AWS account alias set using the IAM console.
   *           We recommend that you use the related parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The AWS account ID of the owner. We recommend that
   *           you use the related parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform. To only list Windows-based AMIs, use
   *             <code>windows</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code.type</code> - The type of the product code (<code>devpay</code> |
   *             <code>marketplace</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-name</code> - The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-type</code> - The type of the root device volume (<code>ebs</code> |
   *             <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the image (<code>available</code> | <code>pending</code>
   *           | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-code</code> - The reason code for the state change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-message</code> - The message for the state change.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sriov-net-support</code> - A value of <code>simple</code> indicates
   *                     that enhanced networking with the Intel 82599 VF interface is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>virtualization-type</code> - The virtualization type (<code>paravirtual</code> |
   *             <code>hvm</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Scopes the images by users with explicit launch permissions.
   * 				Specify an AWS account ID, <code>self</code> (the sender of the request),
   * 				or <code>all</code> (public AMIs).</p>
   */
  ExecutableUsers?: string[];

  /**
   * <p>The image IDs.</p>
   *          <p>Default: Describes all images available to you.</p>
   */
  ImageIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Scopes the results to images with the specified owners. You can specify a combination of
   *       AWS account IDs, <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.
   *       If you omit this parameter, the results include all images for which you have launch permissions,
   *       regardless of ownership.</p>
   */
  Owners?: string[];
}

export namespace DescribeImagesRequest {
  export const filterSensitiveLog = (obj: DescribeImagesRequest): any => ({
    ...obj,
  });
}

export type ArchitectureValues = "arm64" | "i386" | "x86_64";

export type HypervisorType = "ovm" | "xen";

export type ImageTypeValues = "kernel" | "machine" | "ramdisk";

export type DeviceType = "ebs" | "instance-store";

export type ImageState = "available" | "deregistered" | "error" | "failed" | "invalid" | "pending" | "transient";

/**
 * <p>Describes a state change.</p>
 */
export interface StateReason {
  /**
   * <p>The message for the state change.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Server.InsufficientInstanceCapacity</code>: There was insufficient
   *                     capacity available to satisfy the launch request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Server.InternalError</code>: An internal error caused the instance to
   *                     terminate during launch.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Server.ScheduledStop</code>: The instance was stopped due to a scheduled
   *                     retirement.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Server.SpotInstanceShutdown</code>: The instance was stopped because the
   *                     number of Spot requests with a maximum price equal to or higher than the Spot
   *                     price exceeded available capacity or because of an increase in the Spot
   *                     price.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Server.SpotInstanceTermination</code>: The instance was terminated
   *                     because the number of Spot requests with a maximum price equal to or higher than
   *                     the Spot price exceeded available capacity or because of an increase in the Spot
   *                     price.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.InstanceInitiatedShutdown</code>: The instance was shut down
   *                     using the <code>shutdown -h</code> command from the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.InstanceTerminated</code>: The instance was terminated or
   *                     rebooted during AMI creation.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.InternalError</code>: A client error caused the instance to
   *                     terminate during launch.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.InvalidSnapshot.NotFound</code>: The specified snapshot was not
   *                     found.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.UserInitiatedHibernate</code>: Hibernation was initiated on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.UserInitiatedShutdown</code>: The instance was shut down using
   *                     the Amazon EC2 API.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.VolumeLimitExceeded</code>: The limit on the number of EBS
   *                     volumes or total storage was exceeded. Decrease usage or request an increase in
   *                     your account limits.</p>
   *             </li>
   *          </ul>
   */
  Message?: string;

  /**
   * <p>The reason code for the state change.</p>
   */
  Code?: string;
}

export namespace StateReason {
  export const filterSensitiveLog = (obj: StateReason): any => ({
    ...obj,
  });
}

export type VirtualizationType = "hvm" | "paravirtual";

/**
 * <p>Describes an image.</p>
 */
export interface Image {
  /**
   * <p>Any product codes associated with the AMI.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>Any block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>Indicates whether the image has public launch permissions. The value is <code>true</code> if
   * 				this image has public launch permissions or <code>false</code>
   * 				if it has only implicit and explicit launch permissions.</p>
   */
  Public?: boolean;

  /**
   * <p>Any tags assigned to the image.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The type of root device used by the AMI. The AMI can use an EBS volume or an instance store volume.</p>
   */
  RootDeviceType?: DeviceType | string;

  /**
   * <p>The architecture of the image.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>The RAM disk associated with the image, if any. Only applicable for machine images.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The name of the AMI that was provided during image creation.</p>
   */
  Name?: string;

  /**
   * <p>The AWS account alias (for example, <code>amazon</code>, <code>self</code>) or
   *         the AWS account ID of the AMI owner.</p>
   */
  ImageOwnerAlias?: string;

  /**
   * <p>The current state of the AMI. If the state is <code>available</code>, the image is successfully registered and can be used to launch an instance.</p>
   */
  State?: ImageState | string;

  /**
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
   */
  SriovNetSupport?: string;

  /**
   * <p>The reason for the state change.</p>
   */
  StateReason?: StateReason;

  /**
   * <p>The type of image.</p>
   */
  ImageType?: ImageTypeValues | string;

  /**
   * <p>The type of virtualization of the AMI.</p>
   */
  VirtualizationType?: VirtualizationType | string;

  /**
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: boolean;

  /**
   * <p>The platform details associated with the billing code of the AMI. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Obtaining
   *         Billing Information</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  PlatformDetails?: string;

  /**
   * <p>The description of the AMI that was provided during image creation.</p>
   */
  Description?: string;

  /**
   * <p>The location of the AMI.</p>
   */
  ImageLocation?: string;

  /**
   * <p>The AWS account ID of the image owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The kernel associated with the image, if any. Only applicable for machine images.</p>
   */
  KernelId?: string;

  /**
   * <p>This value is set to <code>windows</code> for Windows AMIs; otherwise, it is blank.</p>
   */
  Platform?: PlatformValues | string;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The hypervisor type of the image.</p>
   */
  Hypervisor?: HypervisorType | string;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * <p>The operation of the Amazon EC2 instance and the billing code that is associated with the AMI.
   *         <code>usageOperation</code> corresponds to the <a href="https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#Lineitem-details-O-Operation">lineitem/Operation</a> column on your AWS Cost and Usage Report and in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html">AWS Price
   *         List API</a>. For the list of <code>UsageOperation</code> codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html#billing-info">Platform Details and Usage Operation Billing Codes</a> in the
   *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  UsageOperation?: string;

  /**
   * <p>The date and time the image was created.</p>
   */
  CreationDate?: string;
}

export namespace Image {
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj,
  });
}

export interface DescribeImagesResult {
  /**
   * <p>Information about the images.</p>
   */
  Images?: Image[];
}

export namespace DescribeImagesResult {
  export const filterSensitiveLog = (obj: DescribeImagesResult): any => ({
    ...obj,
  });
}

export interface DescribeImportImageTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter tasks using the <code>task-state</code> filter and one of the following values: <code>active</code>,
   *     <code>completed</code>, <code>deleting</code>, or <code>deleted</code>.</p>
   */
  Filters?: Filter[];

  /**
   * <p>A token that indicates the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The IDs of the import image tasks.</p>
   */
  ImportTaskIds?: string[];
}

export namespace DescribeImportImageTasksRequest {
  export const filterSensitiveLog = (obj: DescribeImportImageTasksRequest): any => ({
    ...obj,
  });
}

/**
 * <p> The response information for license configurations.</p>
 */
export interface ImportImageLicenseConfigurationResponse {
  /**
   * <p>The ARN of a license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace ImportImageLicenseConfigurationResponse {
  export const filterSensitiveLog = (obj: ImportImageLicenseConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 */
export interface UserBucketDetails {
  /**
   * <p>The file name of the disk image.</p>
   */
  S3Key?: string;

  /**
   * <p>The Amazon S3 bucket from which the disk image was created.</p>
   */
  S3Bucket?: string;
}

export namespace UserBucketDetails {
  export const filterSensitiveLog = (obj: UserBucketDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the snapshot created from the imported disk.</p>
 */
export interface SnapshotDetail {
  /**
   * <p>The format of the disk image from which the snapshot is created.</p>
   */
  Format?: string;

  /**
   * <p>A description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The percentage of progress for the task.</p>
   */
  Progress?: string;

  /**
   * <p>The size of the disk in the snapshot, in GiB.</p>
   */
  DiskImageSize?: number;

  /**
   * <p>The URL used to access the disk image.</p>
   */
  Url?: string;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucketDetails;

  /**
   * <p>A detailed status message for the snapshot creation.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The snapshot ID of the disk being imported.</p>
   */
  SnapshotId?: string;

  /**
   * <p>A brief status of the snapshot creation.</p>
   */
  Status?: string;

  /**
   * <p>The block device mapping for the snapshot.</p>
   */
  DeviceName?: string;
}

export namespace SnapshotDetail {
  export const filterSensitiveLog = (obj: SnapshotDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an import image task.</p>
 */
export interface ImportImageTask {
  /**
   * <p>Information about the snapshots.</p>
   */
  SnapshotDetails?: SnapshotDetail[];

  /**
   * <p>The license type of the virtual machine.</p>
   */
  LicenseType?: string;

  /**
   * <p>A brief status for the import image task.</p>
   */
  Status?: string;

  /**
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code> | <code>arm64</code>
   *          </p>
   */
  Architecture?: string;

  /**
   * <p>The identifier for the AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to create
   *    the encrypted image.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A descriptive status message for the import image task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The percentage of progress of the import image task.</p>
   */
  Progress?: string;

  /**
   * <p>The target hypervisor for the import task.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   */
  Hypervisor?: string;

  /**
   * <p>The ARNs of the license configurations that are associated with the import image task.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[];

  /**
   * <p>The tags for the import image task.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether the image is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The description string for the import image task.</p>
   */
  Platform?: string;

  /**
   * <p>A description of the import task.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) of the imported virtual machine.</p>
   */
  ImageId?: string;

  /**
   * <p>The ID of the import image task.</p>
   */
  ImportTaskId?: string;
}

export namespace ImportImageTask {
  export const filterSensitiveLog = (obj: ImportImageTask): any => ({
    ...obj,
  });
}

export interface DescribeImportImageTasksResult {
  /**
   * <p>A list of zero or more import image tasks that are currently active or were completed or canceled in the
   *    previous 7 days.</p>
   */
  ImportImageTasks?: ImportImageTask[];

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeImportImageTasksResult {
  export const filterSensitiveLog = (obj: DescribeImportImageTasksResult): any => ({
    ...obj,
  });
}

export interface DescribeImportSnapshotTasksRequest {
  /**
   * <p>The filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>A token that indicates the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call
   *    with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>A list of import snapshot task IDs.</p>
   */
  ImportTaskIds?: string[];
}

export namespace DescribeImportSnapshotTasksRequest {
  export const filterSensitiveLog = (obj: DescribeImportSnapshotTasksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the import snapshot task.</p>
 */
export interface SnapshotTaskDetail {
  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucketDetails;

  /**
   * <p>A detailed status message for the import snapshot task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The size of the disk in the snapshot, in GiB.</p>
   */
  DiskImageSize?: number;

  /**
   * <p>The identifier for the AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to create
   *    the encrypted snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The format of the disk image from which the snapshot is created.</p>
   */
  Format?: string;

  /**
   * <p>The snapshot ID of the disk being imported.</p>
   */
  SnapshotId?: string;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The URL of the disk image from which the snapshot is created.</p>
   */
  Url?: string;

  /**
   * <p>A brief status for the import snapshot task.</p>
   */
  Status?: string;

  /**
   * <p>The percentage of completion for the import snapshot task.</p>
   */
  Progress?: string;

  /**
   * <p>The description of the snapshot.</p>
   */
  Description?: string;
}

export namespace SnapshotTaskDetail {
  export const filterSensitiveLog = (obj: SnapshotTaskDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an import snapshot task.</p>
 */
export interface ImportSnapshotTask {
  /**
   * <p>Describes an import snapshot task.</p>
   */
  SnapshotTaskDetail?: SnapshotTaskDetail;

  /**
   * <p>The ID of the import snapshot task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>A description of the import snapshot task.</p>
   */
  Description?: string;

  /**
   * <p>The tags for the import snapshot task.</p>
   */
  Tags?: Tag[];
}

export namespace ImportSnapshotTask {
  export const filterSensitiveLog = (obj: ImportSnapshotTask): any => ({
    ...obj,
  });
}

export interface DescribeImportSnapshotTasksResult {
  /**
   * <p>A list of zero or more import snapshot tasks that are currently active or were completed or canceled in the
   *    previous 7 days.</p>
   */
  ImportSnapshotTasks?: ImportSnapshotTask[];

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeImportSnapshotTasksResult {
  export const filterSensitiveLog = (obj: DescribeImportSnapshotTasksResult): any => ({
    ...obj,
  });
}

export type InstanceAttributeName =
  | "blockDeviceMapping"
  | "disableApiTermination"
  | "ebsOptimized"
  | "enaSupport"
  | "enclaveOptions"
  | "groupSet"
  | "instanceInitiatedShutdownBehavior"
  | "instanceType"
  | "kernel"
  | "productCodes"
  | "ramdisk"
  | "rootDeviceName"
  | "sourceDestCheck"
  | "sriovNetSupport"
  | "userData";

export interface DescribeInstanceAttributeRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The instance attribute.</p>
   *         <p>Note: The <code>enaSupport</code> attribute is not supported at this time.</p>
   */
  Attribute: InstanceAttributeName | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeInstanceAttributeRequest {
  export const filterSensitiveLog = (obj: DescribeInstanceAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a parameter used to set up an EBS volume in a block device mapping.</p>
 */
export interface EbsInstanceBlockDevice {
  /**
   * <p>The ID of the EBS volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus | string;
}

export namespace EbsInstanceBlockDevice {
  export const filterSensitiveLog = (obj: EbsInstanceBlockDevice): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface InstanceBlockDeviceMapping {
  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: EbsInstanceBlockDevice;

  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;
}

export namespace InstanceBlockDeviceMapping {
  export const filterSensitiveLog = (obj: InstanceBlockDeviceMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a value for a resource attribute that is a Boolean value.</p>
 */
export interface AttributeBooleanValue {
  /**
   * <p>The attribute value. The valid values are <code>true</code> or <code>false</code>.</p>
   */
  Value?: boolean;
}

export namespace AttributeBooleanValue {
  export const filterSensitiveLog = (obj: AttributeBooleanValue): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether the instance is enabled for AWS Nitro Enclaves.</p>
 */
export interface EnclaveOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for AWS Nitro Enclaves;
   *     		otherwise, it is not enabled for AWS Nitro Enclaves.</p>
   */
  Enabled?: boolean;
}

export namespace EnclaveOptions {
  export const filterSensitiveLog = (obj: EnclaveOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance attribute.</p>
 */
export interface InstanceAttribute {
  /**
   * <p>Indicates whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: AttributeBooleanValue;

  /**
   * <p>The block device mapping of the instance.</p>
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * <p>The kernel ID.</p>
   */
  KernelId?: AttributeValue;

  /**
   * <p>If the value is <code>true</code>, you can't terminate the instance through the Amazon
   *             EC2 console, CLI, or API; otherwise, you can.</p>
   */
  DisableApiTermination?: AttributeBooleanValue;

  /**
   * <p>The security groups associated with the instance.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface
   *             is enabled.</p>
   */
  SriovNetSupport?: AttributeValue;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: AttributeValue;

  /**
   * <p>The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: AttributeValue;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>A list of product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>Indicates whether source/destination checking is enabled. A value of <code>true</code>
   *             means that checking is enabled, and <code>false</code> means that checking is disabled.
   *             This value must be <code>false</code> for a NAT instance to perform NAT.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;

  /**
   * <p>To enable the instance for AWS Nitro Enclaves, set this parameter to <code>true</code>; otherwise,
   * 		set it to <code>false</code>.</p>
   */
  EnclaveOptions?: EnclaveOptions;

  /**
   * <p>The RAM disk ID.</p>
   */
  RamdiskId?: AttributeValue;

  /**
   * <p>The user data.</p>
   */
  UserData?: AttributeValue;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O.</p>
   */
  EbsOptimized?: AttributeBooleanValue;
}

export namespace InstanceAttribute {
  export const filterSensitiveLog = (obj: InstanceAttribute): any => ({
    ...obj,
  });
}

export interface DescribeInstanceCreditSpecificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The instance IDs.</p>
   *         <p>Default: Describes all your instances.</p>
   *         <p>Constraints: Maximum 1000 explicitly specified instance IDs.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. You cannot specify this parameter and the instance IDs
   *             parameter in the same call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceCreditSpecificationsRequest {
  export const filterSensitiveLog = (obj: DescribeInstanceCreditSpecificationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the credit option for CPU usage of a burstable performance instance. </p>
 */
export interface InstanceCreditSpecification {
  /**
   * <p>The credit option for CPU usage of the instance. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;
}

export namespace InstanceCreditSpecification {
  export const filterSensitiveLog = (obj: InstanceCreditSpecification): any => ({
    ...obj,
  });
}

export interface DescribeInstanceCreditSpecificationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the credit option for CPU usage of an instance.</p>
   */
  InstanceCreditSpecifications?: InstanceCreditSpecification[];
}

export namespace DescribeInstanceCreditSpecificationsResult {
  export const filterSensitiveLog = (obj: DescribeInstanceCreditSpecificationsResult): any => ({
    ...obj,
  });
}

export interface DescribeInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeInstanceEventNotificationAttributesRequest {
  export const filterSensitiveLog = (obj: DescribeInstanceEventNotificationAttributesRequest): any => ({
    ...obj,
  });
}

export interface DescribeInstanceEventNotificationAttributesResult {
  /**
   * <p>Information about the registered tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

export namespace DescribeInstanceEventNotificationAttributesResult {
  export const filterSensitiveLog = (obj: DescribeInstanceEventNotificationAttributesResult): any => ({
    ...obj,
  });
}

export interface DescribeInstancesRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>affinity</code> - The affinity setting for an instance running on a
   *                     Dedicated Host (<code>default</code> | <code>host</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>architecture</code> - The instance architecture (<code>i386</code> |
   *                         <code>x86_64</code> | <code>arm64</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>availability-zone</code> - The Availability Zone of the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>block-device-mapping.attach-time</code> - The attach time for an EBS
   *                     volume mapped to the instance, for example,
   *                         <code>2010-09-15T17:15:20.000Z</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>block-device-mapping.delete-on-termination</code> - A Boolean that
   *                     indicates whether the EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>block-device-mapping.device-name</code> - The device name specified in the
   *                     block device mapping (for example, <code>/dev/sdh</code> or
   *                     <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>block-device-mapping.status</code> - The status for the EBS volume
   *                         (<code>attaching</code> | <code>attached</code> | <code>detaching</code> |
   *                         <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>block-device-mapping.volume-id</code> - The volume ID of the EBS
   *                     volume.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>client-token</code> - The idempotency token you provided when you launched
   *                     the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dns-name</code> - The public DNS name of the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>group-id</code> - The ID of the security group for the instance.
   *                     EC2-Classic only.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>group-name</code> - The name of the security group for the instance.
   *                     EC2-Classic only.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>hibernation-options.configured</code> - A Boolean that indicates whether
   *                     the instance is enabled for hibernation. A value of <code>true</code> means that
   *                     the instance is enabled for hibernation. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>host-id</code> - The ID of the Dedicated Host on which the instance is
   *                     running, if applicable.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>hypervisor</code> - The hypervisor type of the instance
   *                     (<code>ovm</code> | <code>xen</code>). The value <code>xen</code>
   *                     is used for both Xen and Nitro hypervisors.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>iam-instance-profile.arn</code> - The instance profile associated with
   *                     the instance. Specified as an ARN.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>image-id</code> - The ID of the image used to launch the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-lifecycle</code> - Indicates whether this is a Spot Instance or
   *                     a Scheduled Instance (<code>spot</code> | <code>scheduled</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-state-code</code> - The state of the instance, as a 16-bit
   *                     unsigned integer. The high byte is used for internal purposes and should be
   *                     ignored. The low byte is set based on the state represented. The valid values
   *                     are: 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64
   *                     (stopping), and 80 (stopped).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-state-name</code> - The state of the instance
   *                         (<code>pending</code> | <code>running</code> | <code>shutting-down</code> |
   *                         <code>terminated</code> | <code>stopping</code> |
   *                     <code>stopped</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-type</code> - The type of instance (for example,
   *                         <code>t2.micro</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance.group-id</code> - The ID of the security group for the
   *                     instance. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance.group-name</code> - The name of the security group for the
   *                     instance. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ip-address</code> - The public IPv4 address of the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>key-name</code> - The name of the key pair used when the instance was
   *                     launched.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch-index</code> - When launching multiple instances, this is the
   *                     index for the instance in the launch group (for example, 0, 1, 2, and so on). </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch-time</code> - The time when the instance was launched.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>metadata-options.http-tokens</code> - The metadata request authorization
   *                     state (<code>optional</code> | <code>required</code>)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>metadata-options.http-put-response-hop-limit</code> - The http metadata
   *                     request put response hop limit (integer, possible values <code>1</code> to
   *                         <code>64</code>)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>metadata-options.http-endpoint</code> - Enable or disable metadata
   *                     access on http endpoint (<code>enabled</code> | <code>disabled</code>)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>monitoring-state</code> - Indicates whether detailed monitoring is
   *                     enabled (<code>disabled</code> | <code>enabled</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.addresses.private-ip-address</code> - The private IPv4
   *                     address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.addresses.primary</code> - Specifies whether the IPv4
   *                     address of the network interface is the primary private IPv4 address.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.addresses.association.public-ip</code> - The ID of the
   *                     association of an Elastic IP address (IPv4) with a network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.addresses.association.ip-owner-id</code> - The owner
   *                     ID of the private IPv4 address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.association.public-ip</code> - The address of the
   *                     Elastic IP address (IPv4) bound to the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.association.ip-owner-id</code> - The owner of the
   *                     Elastic IP address (IPv4) associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.association.allocation-id</code> - The allocation ID
   *                     returned when you allocated the Elastic IP address (IPv4) for your network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.association.association-id</code> - The association ID
   *                     returned when the network interface was associated with an IPv4 address.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.attachment-id</code> - The ID of the
   *                     interface attachment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.instance-id</code> - The ID of the instance
   *                     to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.instance-owner-id</code> - The owner ID of
   *                     the instance to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.device-index</code> - The device index to
   *                     which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.status</code> - The status of the
   *                     attachment (<code>attaching</code> | <code>attached</code> |
   *                         <code>detaching</code> | <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.attach-time</code> - The time that the
   *                     network interface was attached to an instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.delete-on-termination</code> - Specifies
   *                     whether the attachment is deleted when an instance is terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.availability-zone</code> - The Availability Zone for
   *                     the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.description</code> - The description of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.group-id</code> - The ID of a security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.group-name</code> - The name of a security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.ipv6-addresses.ipv6-address</code> - The IPv6 address
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.mac-address</code> - The MAC address of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.network-interface-id</code> - The ID of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.owner-id</code> - The ID of the owner of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.private-dns-name</code> - The private DNS name of the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.requester-id</code> - The requester ID for the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.requester-managed</code> - Indicates whether the
   *                     network interface is being managed by AWS.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.status</code> - The status of the network interface
   *                         (<code>available</code>) | <code>in-use</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.source-dest-check</code> - Whether the network
   *                     interface performs source/destination checking. A value of <code>true</code>
   *                     means that checking is enabled, and <code>false</code> means that checking is
   *                     disabled. The value must be <code>false</code> for the network interface to
   *                     perform network address translation (NAT) in your VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.subnet-id</code> - The ID of the subnet for the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.vpc-id</code> - The ID of the VPC for the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>owner-id</code> - The AWS account ID of the instance owner.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>placement-group-name</code> - The name of the placement group for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>placement-partition-number</code> - The partition in which the instance is
   *                     located.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>platform</code> - The platform. To list only Windows instances, use
   *                         <code>windows</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>private-dns-name</code> - The private IPv4 DNS name of the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>private-ip-address</code> - The private IPv4 address of the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>product-code</code> - The product code associated with the AMI used to
   *                     launch the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>product-code.type</code> - The type of product code (<code>devpay</code> |
   *                         <code>marketplace</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>reason</code> - The reason for the current state of the instance (for
   *                     example, shows "User Initiated [date]" when you stop or terminate the instance).
   *                     Similar to the state-reason-code filter.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>requester-id</code> - The ID of the entity that launched the instance on
   *                     your behalf (for example, AWS Management Console, Auto Scaling, and so
   *                     on).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>reservation-id</code> - The ID of the instance's reservation. A
   *                     reservation ID is created any time you launch an instance. A reservation ID has
   *                     a one-to-one relationship with an instance launch request, but can be associated
   *                     with more than one instance if you launch multiple instances using the same
   *                     launch request. For example, if you launch one instance, you get one reservation
   *                     ID. If you launch ten instances using the same launch request, you also get one
   *                     reservation ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>root-device-name</code> - The device name of the root device volume (for
   *                     example, <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>root-device-type</code> - The type of the root device volume
   *                         (<code>ebs</code> | <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>source-dest-check</code> - Indicates whether the instance performs
   *                     source/destination checking. A value of <code>true</code> means that checking is
   *                     enabled, and <code>false</code> means that checking is disabled. The value must
   *                     be <code>false</code> for the instance to perform network address translation
   *                     (NAT) in your VPC. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>spot-instance-request-id</code> - The ID of the Spot Instance
   *                     request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>state-reason-code</code> - The reason code for the state change.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>state-reason-message</code> - A message that describes the state
   *                     change.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>subnet-id</code> - The ID of the subnet for the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>tenancy</code> - The tenancy of an instance (<code>dedicated</code> |
   *                         <code>default</code> | <code>host</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>virtualization-type</code> - The virtualization type of the instance
   *                         (<code>paravirtual</code> | <code>hvm</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>vpc-id</code> - The ID of the VPC that the instance is running in.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. You cannot specify this parameter and the instance IDs
   *             parameter in the same call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The instance IDs.</p>
   *         <p>Default: Describes all your instances.</p>
   */
  InstanceIds?: string[];
}

export namespace DescribeInstancesRequest {
  export const filterSensitiveLog = (obj: DescribeInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the instance's Capacity Reservation targeting preferences. The action returns the
 *                 <code>capacityReservationPreference</code> response element if the instance is
 *             configured to run in On-Demand capacity, or if it is configured in run in any
 *                 <code>open</code> Capacity Reservation that has matching attributes (instance type, platform,
 *             Availability Zone). The action returns the <code>capacityReservationTarget</code>
 *             response element if the instance explicily targets a specific Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationSpecificationResponse {
  /**
   * <p>Describes the instance's Capacity Reservation preferences. Possible preferences include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that
   *                     has matching attributes (instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is
   *                     available. The instance runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * <p>Information about the targeted Capacity Reservation or Capacity Reservation group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse;
}

export namespace CapacityReservationSpecificationResponse {
  export const filterSensitiveLog = (obj: CapacityReservationSpecificationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The CPU options for the instance.</p>
 */
export interface CpuOptions {
  /**
   * <p>The number of threads per CPU core.</p>
   */
  ThreadsPerCore?: number;

  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;
}

export namespace CpuOptions {
  export const filterSensitiveLog = (obj: CpuOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the association between an instance and an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuAssociation {
  /**
   * <p>The time the Elastic Graphics accelerator was associated with the instance.</p>
   */
  ElasticGpuAssociationTime?: string;

  /**
   * <p>The ID of the association.</p>
   */
  ElasticGpuAssociationId?: string;

  /**
   * <p>The state of the association between the instance and the
   *             Elastic Graphics accelerator.</p>
   */
  ElasticGpuAssociationState?: string;

  /**
   * <p>The ID of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuId?: string;
}

export namespace ElasticGpuAssociation {
  export const filterSensitiveLog = (obj: ElasticGpuAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Describes the association between an instance and an elastic inference accelerator.
 *         </p>
 */
export interface ElasticInferenceAcceleratorAssociation {
  /**
   * <p>
   *             The time at which the elastic inference accelerator is associated with an instance.
   *         </p>
   */
  ElasticInferenceAcceleratorAssociationTime?: Date;

  /**
   * <p>
   *             The state of the elastic inference accelerator.
   *         </p>
   */
  ElasticInferenceAcceleratorAssociationState?: string;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the elastic inference accelerator.
   *         </p>
   */
  ElasticInferenceAcceleratorArn?: string;

  /**
   * <p>
   *             The ID of the association.
   *         </p>
   */
  ElasticInferenceAcceleratorAssociationId?: string;
}

export namespace ElasticInferenceAcceleratorAssociation {
  export const filterSensitiveLog = (obj: ElasticInferenceAcceleratorAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>. For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface HibernationOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, your instance is enabled for
   *             hibernation; otherwise, it is not enabled for hibernation.</p>
   */
  Configured?: boolean;
}

export namespace HibernationOptions {
  export const filterSensitiveLog = (obj: HibernationOptions): any => ({
    ...obj,
  });
}

export type InstanceLifecycleType = "scheduled" | "spot";

/**
 * <p>Describes a license configuration.</p>
 */
export interface LicenseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace LicenseConfiguration {
  export const filterSensitiveLog = (obj: LicenseConfiguration): any => ({
    ...obj,
  });
}

export type InstanceMetadataEndpointState = "disabled" | "enabled";

export enum HttpTokensState {
  optional = "optional",
  required = "required",
}

export type InstanceMetadataOptionsState = "applied" | "pending";

/**
 * <p>The metadata options for the instance.</p>
 */
export interface InstanceMetadataOptionsResponse {
  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not
   *             specified in the request, the default state is <code>optional</code>.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata
   *             with or without a signed token header on your request. If you retrieve the IAM role
   *             credentials without a token, the version 1.0 role credentials are returned. If you
   *             retrieve the IAM role credentials using a valid signed token, the version 2.0 role
   *             credentials are returned.</p>
   *         <p>If the state is <code>required</code>, you must send a signed token header with any
   *             instance metadata retrieval requests. In this state, retrieving the IAM role credential
   *             always returns the version 2.0 credentials; the version 1.0 credentials are not
   *             available.</p>
   */
  HttpTokens?: HttpTokensState | string;

  /**
   * <p>This parameter enables or disables the HTTP metadata endpoint on your instances. If
   *             the parameter is not specified, the default state is <code>enabled</code>.</p>
   *         <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access your
   *                 instance metadata.</p>
   *         </note>
   */
  HttpEndpoint?: InstanceMetadataEndpointState | string;

  /**
   * <p>The state of the metadata option changes.</p>
   *         <p>
   *             <code>pending</code> - The metadata options are being updated and the instance is not
   *             ready to process metadata traffic with the new selection.</p>
   *         <p>
   *             <code>applied</code> - The metadata options have been successfully applied on the
   *             instance.</p>
   */
  State?: InstanceMetadataOptionsState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *         <p>Default: 1</p>
   *         <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;
}

export namespace InstanceMetadataOptionsResponse {
  export const filterSensitiveLog = (obj: InstanceMetadataOptionsResponse): any => ({
    ...obj,
  });
}

export type MonitoringState = "disabled" | "disabling" | "enabled" | "pending";

/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface Monitoring {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  State?: MonitoringState | string;
}

export namespace Monitoring {
  export const filterSensitiveLog = (obj: Monitoring): any => ({
    ...obj,
  });
}

/**
 * <p>Describes association information for an Elastic IP address (IPv4).</p>
 */
export interface InstanceNetworkInterfaceAssociation {
  /**
   * <p>The carrier IP address associated with the network interface.</p>
   */
  CarrierIp?: string;

  /**
   * <p>The public DNS name.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The ID of the owner of the Elastic IP address.</p>
   */
  IpOwnerId?: string;

  /**
   * <p>The public IP address or Elastic IP address bound to the network interface.</p>
   */
  PublicIp?: string;
}

export namespace InstanceNetworkInterfaceAssociation {
  export const filterSensitiveLog = (obj: InstanceNetworkInterfaceAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface attachment.</p>
 */
export interface InstanceNetworkInterfaceAttachment {
  /**
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus | string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * <p>The index of the device on the instance for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;
}

export namespace InstanceNetworkInterfaceAttachment {
  export const filterSensitiveLog = (obj: InstanceNetworkInterfaceAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a private IPv4 address.</p>
 */
export interface InstancePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address for the network interface.</p>
   */
  Association?: InstanceNetworkInterfaceAssociation;

  /**
   * <p>The private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The private IPv4 DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>Indicates whether this IPv4 address is the primary private IP address of the network interface.</p>
   */
  Primary?: boolean;
}

export namespace InstancePrivateIpAddress {
  export const filterSensitiveLog = (obj: InstancePrivateIpAddress): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface.</p>
 */
export interface InstanceNetworkInterface {
  /**
   * <p>Indicates whether to validate network traffic to or from this network interface.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * <p>The status of the network interface.</p>
   */
  Status?: NetworkInterfaceStatus | string;

  /**
   * <p>One or more private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?: InstancePrivateIpAddress[];

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: InstanceNetworkInterfaceAttachment;

  /**
   * <p>The MAC address.</p>
   */
  MacAddress?: string;

  /**
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>One or more security groups.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>Describes the type of network interface.</p>
   * 		       <p>Valid values: <code>interface</code> | <code>efa</code>
   *          </p>
   */
  InterfaceType?: string;

  /**
   * <p>One or more IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The ID of the AWS account that created the network interface.</p>
   */
  OwnerId?: string;

  /**
   * <p>The association information for an Elastic IPv4 associated with the network
   *             interface.</p>
   */
  Association?: InstanceNetworkInterfaceAssociation;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;
}

export namespace InstanceNetworkInterface {
  export const filterSensitiveLog = (obj: InstanceNetworkInterface): any => ({
    ...obj,
  });
}

export type InstanceStateName = "pending" | "running" | "shutting-down" | "stopped" | "stopping" | "terminated";

/**
 * <p>Describes the current state of an instance.</p>
 */
export interface InstanceState {
  /**
   * <p>The state of the instance as a 16-bit unsigned integer. </p>
   *         <p>The high byte is all of the bits between 2^8 and (2^16)-1, which equals decimal values
   *             between 256 and 65,535. These numerical values are used for internal purposes and should
   *             be ignored.</p>
   *         <p>The low byte is all of the bits between 2^0 and (2^8)-1, which equals decimal values
   *             between 0 and 255. </p>
   *         <p>The valid values for instance-state-code will all be in the range of the low byte and
   *             they are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>0</code> : <code>pending</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>16</code> : <code>running</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>32</code> : <code>shutting-down</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>48</code> : <code>terminated</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>64</code> : <code>stopping</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>80</code> : <code>stopped</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>You can ignore the high byte value by zeroing out all of the bits above 2^8 or 256 in
   *             decimal.</p>
   */
  Code?: number;

  /**
   * <p>The current state of the instance.</p>
   */
  Name?: InstanceStateName | string;
}

export namespace InstanceState {
  export const filterSensitiveLog = (obj: InstanceState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance.</p>
 */
export interface Instance {
  /**
   * <p>The AMI launch index, which can be used to find this instance in the launch
   *             group.</p>
   */
  AmiLaunchIndex?: number;

  /**
   * <p>The Elastic GPU associated with the instance.</p>
   */
  ElasticGpuAssociations?: ElasticGpuAssociation[];

  /**
   * <p>Indicates whether the instance is enabled for AWS Nitro Enclaves.</p>
   */
  EnclaveOptions?: EnclaveOptions;

  /**
   * <p>The root device type used by the AMI. The AMI can use an EBS volume or an instance
   *             store volume.</p>
   */
  RootDeviceType?: DeviceType | string;

  /**
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface
   *             is enabled.</p>
   */
  SriovNetSupport?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The metadata options for the instance.</p>
   */
  MetadataOptions?: InstanceMetadataOptionsResponse;

  /**
   * <p>The architecture of the image.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>[EC2-VPC] The network interfaces for the instance.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterface[];

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal I/O performance. This optimization isn't available with all instance
   *             types. Additional usage charges apply when using an EBS Optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The ID of the AMI used to launch the instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the key pair, if this instance was launched with an associated key
   *             pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The time the instance was launched.</p>
   */
  LaunchTime?: Date;

  /**
   * <p>The private IPv4 address assigned to the instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The product codes attached to this instance, if applicable.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>Any tags assigned to the instance.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether the instance is enabled for hibernation.</p>
   */
  HibernationOptions?: HibernationOptions;

  /**
   * <p>Indicates whether this is a Spot Instance or a Scheduled Instance.</p>
   */
  InstanceLifecycle?: InstanceLifecycleType | string;

  /**
   * <p>The hypervisor type of the instance. The value <code>xen</code> is used for both Xen and
   *             Nitro hypervisors.</p>
   */
  Hypervisor?: HypervisorType | string;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: Placement;

  /**
   * <p>The IAM instance profile associated with the instance, if applicable.</p>
   */
  IamInstanceProfile?: IamInstanceProfile;

  /**
   * <p>The CPU options for the instance.</p>
   */
  CpuOptions?: CpuOptions;

  /**
   * <p>Specifies whether to enable an instance launched in a VPC to perform NAT. This
   *             controls whether source/destination checking is enabled on the instance. A value of
   *                 <code>true</code> means that checking is enabled, and <code>false</code> means that
   *             checking is disabled. The value must be <code>false</code> for the instance to perform
   *             NAT. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html">NAT Instances</a> in the
   *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: Monitoring;

  /**
   * <p>The license configurations.</p>
   */
  Licenses?: LicenseConfiguration[];

  /**
   * <p>The public IPv4 address, or the Carrier IP address assigned to the instance, if
   *             applicable.</p>
   *         <p>A Carrier IP address only applies to an instance launched in a subnet associated with
   *             a Wavelength Zone.</p>
   */
  PublicIpAddress?: string;

  /**
   * <p>The RAM disk associated with this instance, if applicable.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * <p>The security groups for the instance.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: CapacityReservationSpecificationResponse;

  /**
   * <p>(IPv4 only) The private DNS hostname name assigned to the instance. This DNS hostname
   *             can only be used inside the Amazon EC2 network. This name is not available until the
   *             instance enters the <code>running</code> state. </p>
   *         <p>[EC2-VPC] The Amazon-provided DNS server resolves Amazon-provided private DNS
   *             hostnames if you've enabled DNS resolution and DNS hostnames in your VPC. If you are not
   *             using the Amazon-provided DNS server in your VPC, your custom domain name servers must
   *             resolve the hostname as appropriate.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The virtualization type of the instance.</p>
   */
  VirtualizationType?: VirtualizationType | string;

  /**
   * <p>[EC2-VPC] The ID of the subnet in which the instance is running.</p>
   */
  SubnetId?: string;

  /**
   * <p>The value is <code>Windows</code> for Windows instances; otherwise blank.</p>
   */
  Platform?: PlatformValues | string;

  /**
   * <p> The elastic inference accelerator associated with the instance.</p>
   */
  ElasticInferenceAcceleratorAssociations?: ElasticInferenceAcceleratorAssociation[];

  /**
   * <p>The kernel associated with this instance, if applicable.</p>
   */
  KernelId?: string;

  /**
   * <p>The reason for the most recent state transition. This might be an empty string.</p>
   */
  StateTransitionReason?: string;

  /**
   * <p>The current state of the instance.</p>
   */
  State?: InstanceState;

  /**
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: boolean;

  /**
   * <p>The reason for the most recent state transition.</p>
   */
  StateReason?: StateReason;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The idempotency token you provided when you launched the instance, if
   *             applicable.</p>
   */
  ClientToken?: string;

  /**
   * <p>(IPv4 only) The public DNS name assigned to the instance. This name is not available
   *             until the instance enters the <code>running</code> state. For EC2-VPC, this name is only
   *             available if you've enabled DNS hostnames for your VPC.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>Any block device mapping entries for the instance.</p>
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * <p>If the request is a Spot Instance request, the ID of the request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>[EC2-VPC] The ID of the VPC in which the instance is running.</p>
   */
  VpcId?: string;
}

export namespace Instance {
  export const filterSensitiveLog = (obj: Instance): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch request for one or more instances, and includes
 *             owner, requester, and security group information that applies to all
 *             instances in the launch request.</p>
 */
export interface Reservation {
  /**
   * <p>The ID of the requester that launched the instances on your behalf (for example, AWS
   *             Management Console or Auto Scaling).</p>
   */
  RequesterId?: string;

  /**
   * <p>The ID of the AWS account that owns the reservation.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the reservation.</p>
   */
  ReservationId?: string;

  /**
   * <p>[EC2-Classic only] The security groups.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The instances.</p>
   */
  Instances?: Instance[];
}

export namespace Reservation {
  export const filterSensitiveLog = (obj: Reservation): any => ({
    ...obj,
  });
}

export interface DescribeInstancesResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the reservations.</p>
   */
  Reservations?: Reservation[];
}

export namespace DescribeInstancesResult {
  export const filterSensitiveLog = (obj: DescribeInstancesResult): any => ({
    ...obj,
  });
}

export interface DescribeInstanceStatusRequest {
  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. You cannot specify this parameter and the instance IDs
   *             parameter in the same call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone of the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>event.code</code> - The code for the scheduled event
   *                         (<code>instance-reboot</code> | <code>system-reboot</code> |
   *                         <code>system-maintenance</code> | <code>instance-retirement</code> |
   *                         <code>instance-stop</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>event.description</code> - A description of the event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>event.instance-event-id</code> - The ID of the event whose date and time
   *                     you are modifying.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>event.not-after</code> - The latest end time for the scheduled event
   *                     (for example, <code>2014-09-15T17:15:20.000Z</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>event.not-before</code> - The earliest start time for the scheduled
   *                     event (for example, <code>2014-09-15T17:15:20.000Z</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>event.not-before-deadline</code> - The deadline for starting the event
   *                     (for example, <code>2014-09-15T17:15:20.000Z</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-state-code</code> - The code for the instance state, as a
   *                     16-bit unsigned integer. The high byte is used for internal purposes and should
   *                     be ignored. The low byte is set based on the state represented. The valid values
   *                     are 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64
   *                     (stopping), and 80 (stopped).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-state-name</code> - The state of the instance
   *                         (<code>pending</code> | <code>running</code> | <code>shutting-down</code> |
   *                         <code>terminated</code> | <code>stopping</code> |
   *                     <code>stopped</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-status.reachability</code> - Filters on instance status where
   *                     the name is <code>reachability</code> (<code>passed</code> | <code>failed</code>
   *                     | <code>initializing</code> | <code>insufficient-data</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-status.status</code> - The status of the instance
   *                         (<code>ok</code> | <code>impaired</code> | <code>initializing</code> |
   *                         <code>insufficient-data</code> | <code>not-applicable</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>system-status.reachability</code> - Filters on system status where the
   *                     name is <code>reachability</code> (<code>passed</code> | <code>failed</code> |
   *                         <code>initializing</code> | <code>insufficient-data</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>system-status.status</code> - The system status of the instance
   *                         (<code>ok</code> | <code>impaired</code> | <code>initializing</code> |
   *                         <code>insufficient-data</code> | <code>not-applicable</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>When <code>true</code>, includes the health status for all instances. When
   *                 <code>false</code>, includes the health status for running instances only.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  IncludeAllInstances?: boolean;

  /**
   * <p>The instance IDs.</p>
   *         <p>Default: Describes all your instances.</p>
   *         <p>Constraints: Maximum 100 explicitly specified instance IDs.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceStatusRequest {
  export const filterSensitiveLog = (obj: DescribeInstanceStatusRequest): any => ({
    ...obj,
  });
}

export type EventCode =
  | "instance-reboot"
  | "instance-retirement"
  | "instance-stop"
  | "system-maintenance"
  | "system-reboot";

/**
 * <p>Describes a scheduled event for an instance.</p>
 */
export interface InstanceStatusEvent {
  /**
   * <p>The earliest scheduled start time for the event.</p>
   */
  NotBefore?: Date;

  /**
   * <p>A description of the event.</p>
   *         <p>After a scheduled event is completed, it can still be described for up to a week. If
   *             the event has been completed, this description starts with the following text:
   *             [Completed].</p>
   */
  Description?: string;

  /**
   * <p>The event code.</p>
   */
  Code?: EventCode | string;

  /**
   * <p>The latest scheduled end time for the event.</p>
   */
  NotAfter?: Date;

  /**
   * <p>The deadline for starting the event.</p>
   */
  NotBeforeDeadline?: Date;

  /**
   * <p>The ID of the event.</p>
   */
  InstanceEventId?: string;
}

export namespace InstanceStatusEvent {
  export const filterSensitiveLog = (obj: InstanceStatusEvent): any => ({
    ...obj,
  });
}

export type StatusName = "reachability";

export type StatusType = "failed" | "initializing" | "insufficient-data" | "passed";

/**
 * <p>Describes the instance status.</p>
 */
export interface InstanceStatusDetails {
  /**
   * <p>The time when a status check failed. For an instance that was launched and impaired,
   *             this is the time when the instance was launched.</p>
   */
  ImpairedSince?: Date;

  /**
   * <p>The type of instance status.</p>
   */
  Name?: StatusName | string;

  /**
   * <p>The status.</p>
   */
  Status?: StatusType | string;
}

export namespace InstanceStatusDetails {
  export const filterSensitiveLog = (obj: InstanceStatusDetails): any => ({
    ...obj,
  });
}

export type SummaryStatus = "impaired" | "initializing" | "insufficient-data" | "not-applicable" | "ok";

/**
 * <p>Describes the status of an instance.</p>
 */
export interface InstanceStatusSummary {
  /**
   * <p>The system instance health or application instance health.</p>
   */
  Details?: InstanceStatusDetails[];

  /**
   * <p>The status.</p>
   */
  Status?: SummaryStatus | string;
}

export namespace InstanceStatusSummary {
  export const filterSensitiveLog = (obj: InstanceStatusSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of an instance.</p>
 */
export interface InstanceStatus {
  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The intended state of the instance. <a>DescribeInstanceStatus</a> requires
   *             that an instance be in the <code>running</code> state.</p>
   */
  InstanceState?: InstanceState;

  /**
   * <p>Reports impaired functionality that stems from issues internal to the instance, such
   *             as impaired reachability.</p>
   */
  InstanceStatus?: InstanceStatusSummary;

  /**
   * <p>The Availability Zone of the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Any scheduled events associated with the instance.</p>
   */
  Events?: InstanceStatusEvent[];

  /**
   * <p>Reports impaired functionality that stems from issues related to the systems that
   *             support an instance, such as hardware failures and network connectivity problems.</p>
   */
  SystemStatus?: InstanceStatusSummary;
}

export namespace InstanceStatus {
  export const filterSensitiveLog = (obj: InstanceStatus): any => ({
    ...obj,
  });
}

export interface DescribeInstanceStatusResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the status of the instances.</p>
   */
  InstanceStatuses?: InstanceStatus[];
}

export namespace DescribeInstanceStatusResult {
  export const filterSensitiveLog = (obj: DescribeInstanceStatusResult): any => ({
    ...obj,
  });
}

export type LocationType = "availability-zone" | "availability-zone-id" | "region";

export interface DescribeInstanceTypeOfferingsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *          and provides an error response. If you have the required permissions, the error response is
   *          <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The location type.</p>
   */
  LocationType?: LocationType | string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results
   *          can be seen by sending another request with the next token value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>location</code> - This depends on the location type. For example, if the location type is
   *       <code>region</code> (default), the location is the Region code (for example, <code>us-east-2</code>.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeInstanceTypeOfferingsRequest {
  export const filterSensitiveLog = (obj: DescribeInstanceTypeOfferingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The instance types offered.</p>
 */
export interface InstanceTypeOffering {
  /**
   * <p>The location type.</p>
   */
  LocationType?: LocationType | string;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute
   *     Cloud User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The identifier for the location. This depends on the location type. For example, if the location type is
   *     <code>region</code>, the location is the Region code (for example, <code>us-east-2</code>.)</p>
   */
  Location?: string;
}

export namespace InstanceTypeOffering {
  export const filterSensitiveLog = (obj: InstanceTypeOffering): any => ({
    ...obj,
  });
}

export interface DescribeInstanceTypeOfferingsResult {
  /**
   * <p>The instance types offered.</p>
   */
  InstanceTypeOfferings?: InstanceTypeOffering[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceTypeOfferingsResult {
  export const filterSensitiveLog = (obj: DescribeInstanceTypeOfferingsResult): any => ({
    ...obj,
  });
}

export interface DescribeInstanceTypesRequest {
  /**
   * <p>The instance types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute
   *     Cloud User Guide</i>.</p>
   */
  InstanceTypes?: (_InstanceType | string)[];

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>auto-recovery-supported</code> - Indicates whether auto recovery is supported.  (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bare-metal</code> - Indicates whether it is a bare metal instance type.  (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>burstable-performance-supported</code> - Indicates whether it is a burstable performance instance
   *      type.  (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>current-generation</code> - Indicates whether this instance type is the latest generation instance type
   *      of an instance family.  (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.baseline-bandwidth-in-mbps</code> - The baseline
   *                     bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.baseline-iops</code> - The baseline input/output storage
   *      operations per second for an EBS-optimized instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.baseline-throughput-in-mbps</code> - The baseline
   *                     throughput performance for an EBS-optimized instance type, in MBps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.maximum-bandwidth-in-mbps</code> - The maximum bandwidth
   *                     performance for an EBS-optimized instance type, in Mbps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.maximum-iops</code> - The maximum input/output storage
   *                     operations per second for an EBS-optimized instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.maximum-throughput-in-mbps</code> - The maximum
   *      throughput performance for an EBS-optimized instance type, in MBps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-support</code> - Indicates whether the instance type is
   *      EBS-optimized. (<code>supported</code> | <code>unsupported</code> | <code>default</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.encryption-support</code> - Indicates whether EBS encryption is supported.
   *       (<code>supported</code> | <code>unsupported</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.nvme-support</code> - Indicates whether non-volatile memory express (NVMe)
   *      is supported for EBS volumes. (<code>required</code> | <code>supported</code> |
   *      <code>unsupported</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>free-tier-eligible</code> - Indicates whether the instance type is eligible to use
   *      in the free tier.  (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hibernation-supported</code> - Indicates whether On-Demand hibernation is supported.
   *       (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hypervisor</code> - The hypervisor. (<code>nitro</code> | <code>xen</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.disk.count</code> - The number of local disks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.disk.size-in-gb</code> - The storage size of each instance storage disk, in
   *      GB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.disk.type</code> - The storage technology for the local instance storage disks.
   *       (<code>hdd</code> | <code>ssd</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.nvme-support</code> - Indicates whether non-volatile memory express (NVMe)
   *      is supported for instance store. (<code>required</code> | <code>supported</code>) | <code>unsupported</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.total-size-in-gb</code> - The total amount of storage available from all local
   *      instance storage, in GB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-supported</code> - Indicates whether the instance type has local instance
   *      storage. (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example <code>c5.2xlarge</code> or
   *      c5*).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>memory-info.size-in-mib</code> - The memory size.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.efa-supported</code> - Indicates whether the instance type supports Elastic Fabric Adapter (EFA).  (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ena-support</code> - Indicates whether Elastic Network Adapter (ENA) is supported or
   *      required. (<code>required</code> | <code>supported</code> | <code>unsupported</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ipv4-addresses-per-interface</code> - The maximum number of private IPv4 addresses per
   *      network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ipv6-addresses-per-interface</code> - The maximum number of private IPv6 addresses per
   *      network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ipv6-supported</code> - Indicates whether the instance type supports IPv6. (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.maximum-network-interfaces</code> - The maximum number of network interfaces per instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.network-performance</code> - The network performance (for example, "25
   *      Gigabit").</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>processor-info.supported-architecture</code> - The CPU architecture. (<code>arm64</code> | <code>i386</code> | <code>x86_64</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>processor-info.sustained-clock-speed-in-ghz</code> - The CPU clock speed, in GHz.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-root-device-type</code> - The root device type. (<code>ebs</code> | <code>instance-store</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-usage-class</code> - The usage class. (<code>on-demand</code> | <code>spot</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-virtualization-type</code> - The virtualization type. (<code>hvm</code> | <code>paravirtual</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.default-cores</code> - The default number of cores for the instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.default-threads-per-core</code> - The default number of threads per core for the instance
   *      type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.default-vcpus</code> - The default number of vCPUs for the instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.valid-cores</code> - The number of cores that can be configured for the instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.valid-threads-per-core</code> - The number of threads per core that can be configured for the instance type.
   *         For example, "1" or "1,2".</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *          and provides an error response. If you have the required permissions, the error response is
   *          <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results
   *          can be seen by sending another request with the next token value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeInstanceTypesRequest {
  export const filterSensitiveLog = (obj: DescribeInstanceTypesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the optimized EBS performance for supported instance types.</p>
 */
export interface EbsOptimizedInfo {
  /**
   * <p>The baseline bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   */
  BaselineBandwidthInMbps?: number;

  /**
   * <p>The maximum input/output storage operations per second for an EBS-optimized instance type.</p>
   */
  MaximumIops?: number;

  /**
   * <p>The maximum throughput performance for an EBS-optimized instance type, in MBps.</p>
   */
  MaximumThroughputInMBps?: number;

  /**
   * <p>The baseline throughput performance for an EBS-optimized instance type, in MBps.</p>
   */
  BaselineThroughputInMBps?: number;

  /**
   * <p>The baseline input/output storage operations per seconds for an EBS-optimized instance type.</p>
   */
  BaselineIops?: number;

  /**
   * <p>The maximum bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   */
  MaximumBandwidthInMbps?: number;
}

export namespace EbsOptimizedInfo {
  export const filterSensitiveLog = (obj: EbsOptimizedInfo): any => ({
    ...obj,
  });
}

export type EbsOptimizedSupport = "default" | "supported" | "unsupported";

export type EbsEncryptionSupport = "supported" | "unsupported";

export enum EbsNvmeSupport {
  REQUIRED = "required",
  SUPPORTED = "supported",
  UNSUPPORTED = "unsupported",
}

/**
 * <p>Describes the Amazon EBS features supported by the instance type.</p>
 */
export interface EbsInfo {
  /**
   * <p>Describes the optimized EBS performance for the instance type.</p>
   */
  EbsOptimizedInfo?: EbsOptimizedInfo;

  /**
   * <p>Indicates that the instance type is Amazon EBS-optimized. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-Optimized Instances</a> in <i>Amazon EC2 User Guide for
   *     Linux Instances</i>.</p>
   */
  EbsOptimizedSupport?: EbsOptimizedSupport | string;

  /**
   * <p>Indicates whether Amazon EBS encryption is supported.</p>
   */
  EncryptionSupport?: EbsEncryptionSupport | string;

  /**
   * <p>Indicates whether non-volatile memory express (NVMe) is supported.</p>
   */
  NvmeSupport?: EbsNvmeSupport | string;
}

export namespace EbsInfo {
  export const filterSensitiveLog = (obj: EbsInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the memory for the FPGA accelerator for the instance type.</p>
 */
export interface FpgaDeviceMemoryInfo {
  /**
   * <p>The size (in MiB) for the memory available to the FPGA accelerator.</p>
   */
  SizeInMiB?: number;
}

export namespace FpgaDeviceMemoryInfo {
  export const filterSensitiveLog = (obj: FpgaDeviceMemoryInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the FPGA accelerator for the instance type.</p>
 */
export interface FpgaDeviceInfo {
  /**
   * <p>The manufacturer of the FPGA accelerator.</p>
   */
  Manufacturer?: string;

  /**
   * <p>The count of FPGA accelerators for the instance type.</p>
   */
  Count?: number;

  /**
   * <p>The name of the FPGA accelerator.</p>
   */
  Name?: string;

  /**
   * <p>Describes the memory for the FPGA accelerator for the instance type.</p>
   */
  MemoryInfo?: FpgaDeviceMemoryInfo;
}

export namespace FpgaDeviceInfo {
  export const filterSensitiveLog = (obj: FpgaDeviceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the FPGAs for the instance type.</p>
 */
export interface FpgaInfo {
  /**
   * <p>Describes the FPGAs for the instance type.</p>
   */
  Fpgas?: FpgaDeviceInfo[];

  /**
   * <p>The total memory of all FPGA accelerators for the instance type.</p>
   */
  TotalFpgaMemoryInMiB?: number;
}

export namespace FpgaInfo {
  export const filterSensitiveLog = (obj: FpgaInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the memory available to the GPU accelerator.</p>
 */
export interface GpuDeviceMemoryInfo {
  /**
   * <p>The size (in MiB) for the memory available to the GPU accelerator.</p>
   */
  SizeInMiB?: number;
}

export namespace GpuDeviceMemoryInfo {
  export const filterSensitiveLog = (obj: GpuDeviceMemoryInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the GPU accelerators for the instance type.</p>
 */
export interface GpuDeviceInfo {
  /**
   * <p>Describes the memory available to the GPU accelerator.</p>
   */
  MemoryInfo?: GpuDeviceMemoryInfo;

  /**
   * <p>The number of GPUs for the instance type.</p>
   */
  Count?: number;

  /**
   * <p>The name of the GPU accelerator.</p>
   */
  Name?: string;

  /**
   * <p>The manufacturer of the GPU accelerator.</p>
   */
  Manufacturer?: string;
}

export namespace GpuDeviceInfo {
  export const filterSensitiveLog = (obj: GpuDeviceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the GPU accelerators for the instance type.</p>
 */
export interface GpuInfo {
  /**
   * <p>Describes the GPU accelerators for the instance type.</p>
   */
  Gpus?: GpuDeviceInfo[];

  /**
   * <p>The total size of the memory for the GPU accelerators for the instance type.</p>
   */
  TotalGpuMemoryInMiB?: number;
}

export namespace GpuInfo {
  export const filterSensitiveLog = (obj: GpuInfo): any => ({
    ...obj,
  });
}

export enum InstanceTypeHypervisor {
  NITRO = "nitro",
  XEN = "xen",
}

/**
 * <p>Describes the Inference accelerators for the instance type.</p>
 */
export interface InferenceDeviceInfo {
  /**
   * <p>The manufacturer of the Inference accelerator.</p>
   */
  Manufacturer?: string;

  /**
   * <p>The number of Inference accelerators for the instance type.</p>
   */
  Count?: number;

  /**
   * <p>The name of the Inference accelerator.</p>
   */
  Name?: string;
}

export namespace InferenceDeviceInfo {
  export const filterSensitiveLog = (obj: InferenceDeviceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Inference accelerators for the instance type.</p>
 */
export interface InferenceAcceleratorInfo {
  /**
   * <p>Describes the Inference accelerators for the instance type.</p>
   */
  Accelerators?: InferenceDeviceInfo[];
}

export namespace InferenceAcceleratorInfo {
  export const filterSensitiveLog = (obj: InferenceAcceleratorInfo): any => ({
    ...obj,
  });
}

export type DiskType = "hdd" | "ssd";

/**
 * <p>Describes the disk.</p>
 */
export interface DiskInfo {
  /**
   * <p>The type of disk.</p>
   */
  Type?: DiskType | string;

  /**
   * <p>The number of disks with this configuration.</p>
   */
  Count?: number;

  /**
   * <p>The size of the disk in GB.</p>
   */
  SizeInGB?: number;
}

export namespace DiskInfo {
  export const filterSensitiveLog = (obj: DiskInfo): any => ({
    ...obj,
  });
}

export enum EphemeralNvmeSupport {
  REQUIRED = "required",
  SUPPORTED = "supported",
  UNSUPPORTED = "unsupported",
}

/**
 * <p>Describes the disks that are available for the instance type.</p>
 */
export interface InstanceStorageInfo {
  /**
   * <p>The total size of the disks, in GB.</p>
   */
  TotalSizeInGB?: number;

  /**
   * <p>Indicates whether non-volatile memory express (NVMe) is supported for instance store.</p>
   */
  NvmeSupport?: EphemeralNvmeSupport | string;

  /**
   * <p>Array describing the disks that are available for the instance type.</p>
   */
  Disks?: DiskInfo[];
}

export namespace InstanceStorageInfo {
  export const filterSensitiveLog = (obj: InstanceStorageInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the memory for the instance type.</p>
 */
export interface MemoryInfo {
  /**
   * <p>Size of the memory, in MiB.</p>
   */
  SizeInMiB?: number;
}

export namespace MemoryInfo {
  export const filterSensitiveLog = (obj: MemoryInfo): any => ({
    ...obj,
  });
}

export type EnaSupport = "required" | "supported" | "unsupported";

/**
 * <p>Describes the networking features of the instance type.</p>
 */
export interface NetworkInfo {
  /**
   * <p>The maximum number of network interfaces for the instance type.</p>
   */
  MaximumNetworkInterfaces?: number;

  /**
   * <p>Indicates whether IPv6 is supported.</p>
   */
  Ipv6Supported?: boolean;

  /**
   * <p>Describes the network performance.</p>
   */
  NetworkPerformance?: string;

  /**
   * <p>The maximum number of IPv6 addresses per network interface.</p>
   */
  Ipv6AddressesPerInterface?: number;

  /**
   * <p>Indicates whether Elastic Fabric Adapter (EFA) is supported.</p>
   */
  EfaSupported?: boolean;

  /**
   * <p>Indicates whether Elastic Network Adapter (ENA) is supported.</p>
   */
  EnaSupport?: EnaSupport | string;

  /**
   * <p>The maximum number of IPv4 addresses per network interface.</p>
   */
  Ipv4AddressesPerInterface?: number;
}

export namespace NetworkInfo {
  export const filterSensitiveLog = (obj: NetworkInfo): any => ({
    ...obj,
  });
}

export type PlacementGroupStrategy = "cluster" | "partition" | "spread";

/**
 * <p>Describes the placement group support of the instance type.</p>
 */
export interface PlacementGroupInfo {
  /**
   * <p>A list of supported placement groups types.</p>
   */
  SupportedStrategies?: (PlacementGroupStrategy | string)[];
}

export namespace PlacementGroupInfo {
  export const filterSensitiveLog = (obj: PlacementGroupInfo): any => ({
    ...obj,
  });
}

export type ArchitectureType = "arm64" | "i386" | "x86_64";

/**
 * <p>Describes the processor used by the instance type.</p>
 */
export interface ProcessorInfo {
  /**
   * <p>The speed of the processor, in GHz.</p>
   */
  SustainedClockSpeedInGhz?: number;

  /**
   * <p>A list of architectures supported by the instance type.</p>
   */
  SupportedArchitectures?: (ArchitectureType | string)[];
}

export namespace ProcessorInfo {
  export const filterSensitiveLog = (obj: ProcessorInfo): any => ({
    ...obj,
  });
}

export type RootDeviceType = "ebs" | "instance-store";

export type UsageClassType = "on-demand" | "spot";

/**
 * <p>Describes the vCPU configurations for the instance type.</p>
 */
export interface VCpuInfo {
  /**
   * <p>List of the valid number of cores that can be configured for the instance type.</p>
   */
  ValidCores?: number[];

  /**
   * <p>The default number of vCPUs for the instance type.</p>
   */
  DefaultVCpus?: number;

  /**
   * <p>The default number of cores for the instance type.</p>
   */
  DefaultCores?: number;

  /**
   * <p>The default number of threads per core for the instance type.</p>
   */
  DefaultThreadsPerCore?: number;

  /**
   * <p>List of the valid number of threads per core that can be configured for the instance type. </p>
   */
  ValidThreadsPerCore?: number[];
}

export namespace VCpuInfo {
  export const filterSensitiveLog = (obj: VCpuInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the instance type.</p>
 */
export interface InstanceTypeInfo {
  /**
   * <p>Describes the processor.</p>
   */
  ProcessorInfo?: ProcessorInfo;

  /**
   * <p>Describes the Amazon EBS settings for the instance type.</p>
   */
  EbsInfo?: EbsInfo;

  /**
   * <p>Describes the disks for the instance type.</p>
   */
  InstanceStorageInfo?: InstanceStorageInfo;

  /**
   * <p>Indicates whether On-Demand hibernation is supported.</p>
   */
  HibernationSupported?: boolean;

  /**
   * <p>Indicates whether auto recovery is supported.</p>
   */
  AutoRecoverySupported?: boolean;

  /**
   * <p>Indicates whether the instance type is eligible for the free tier.</p>
   */
  FreeTierEligible?: boolean;

  /**
   * <p>Indicates whether the instance is bare metal.</p>
   */
  BareMetal?: boolean;

  /**
   * <p>Describes the GPU accelerator settings for the instance type.</p>
   */
  GpuInfo?: GpuInfo;

  /**
   * <p>Describes the Inference accelerator settings for the instance type.</p>
   */
  InferenceAcceleratorInfo?: InferenceAcceleratorInfo;

  /**
   * <p>Describes the network settings for the instance type.</p>
   */
  NetworkInfo?: NetworkInfo;

  /**
   * <p>Indicates whether the instance type is a current generation.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Indicates whether the instance type is a burstable performance instance type.</p>
   */
  BurstablePerformanceSupported?: boolean;

  /**
   * <p>Indicates the supported root device types.</p>
   */
  SupportedRootDeviceTypes?: (RootDeviceType | string)[];

  /**
   * <p>Indicates whether instance storage is supported.</p>
   */
  InstanceStorageSupported?: boolean;

  /**
   * <p>Describes the FPGA accelerator settings for the instance type.</p>
   */
  FpgaInfo?: FpgaInfo;

  /**
   * <p>Describes the memory for the instance type.</p>
   */
  MemoryInfo?: MemoryInfo;

  /**
   * <p>Describes the vCPU configurations for the instance type.</p>
   */
  VCpuInfo?: VCpuInfo;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute
   *     Cloud User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>Indicates the hypervisor used for the instance type.</p>
   */
  Hypervisor?: InstanceTypeHypervisor | string;

  /**
   * <p>Describes the placement group settings for the instance type.</p>
   */
  PlacementGroupInfo?: PlacementGroupInfo;

  /**
   * <p>The supported virtualization types.</p>
   */
  SupportedVirtualizationTypes?: (VirtualizationType | string)[];

  /**
   * <p>Indicates whether Dedicated Hosts are supported on the instance type.</p>
   */
  DedicatedHostsSupported?: boolean;

  /**
   * <p>Indicates whether the instance type is offered for spot or On-Demand.</p>
   */
  SupportedUsageClasses?: (UsageClassType | string)[];
}

export namespace InstanceTypeInfo {
  export const filterSensitiveLog = (obj: InstanceTypeInfo): any => ({
    ...obj,
  });
}

export interface DescribeInstanceTypesResult {
  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute
   *     Cloud User Guide</i>.</p>
   */
  InstanceTypes?: InstanceTypeInfo[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceTypesResult {
  export const filterSensitiveLog = (obj: DescribeInstanceTypesResult): any => ({
    ...obj,
  });
}

export interface DescribeInternetGatewaysRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>attachment.state</code> - The current state of the attachment between the gateway
   *                     and the VPC (<code>available</code>). Present only if a VPC is attached.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.vpc-id</code> - The ID of an attached VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>internet-gateway-id</code> - The ID of the Internet gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>owner-id</code> - The ID of the AWS account that owns the internet gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more internet gateway IDs.</p>
   *         <p>Default: Describes all your internet gateways.</p>
   */
  InternetGatewayIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeInternetGatewaysRequest {
  export const filterSensitiveLog = (obj: DescribeInternetGatewaysRequest): any => ({
    ...obj,
  });
}

export interface DescribeInternetGatewaysResult {
  /**
   * <p>Information about one or more internet gateways.</p>
   */
  InternetGateways?: InternetGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeInternetGatewaysResult {
  export const filterSensitiveLog = (obj: DescribeInternetGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeIpv6PoolsRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The IDs of the IPv6 address pools.</p>
   */
  PoolIds?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeIpv6PoolsRequest {
  export const filterSensitiveLog = (obj: DescribeIpv6PoolsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a CIDR block for an address pool.</p>
 */
export interface PoolCidrBlock {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr?: string;
}

export namespace PoolCidrBlock {
  export const filterSensitiveLog = (obj: PoolCidrBlock): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 address pool.</p>
 */
export interface Ipv6Pool {
  /**
   * <p>The description for the address pool.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>The CIDR blocks for the address pool.</p>
   */
  PoolCidrBlocks?: PoolCidrBlock[];

  /**
   * <p>Any tags for the address pool.</p>
   */
  Tags?: Tag[];
}

export namespace Ipv6Pool {
  export const filterSensitiveLog = (obj: Ipv6Pool): any => ({
    ...obj,
  });
}

export interface DescribeIpv6PoolsResult {
  /**
   * <p>Information about the IPv6 address pools.</p>
   */
  Ipv6Pools?: Ipv6Pool[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeIpv6PoolsResult {
  export const filterSensitiveLog = (obj: DescribeIpv6PoolsResult): any => ({
    ...obj,
  });
}

export interface DescribeKeyPairsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *      		        <p>
   *      			          <code>key-pair-id</code> - The ID of the key pair.</p>
   *      	      </li>
   *             <li>
   *                <p>
   *                   <code>fingerprint</code> - The fingerprint of the key pair.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>key-name</code> - The name of the key pair.</p>
   *             </li>
   *             <li>
   *      		        <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *      	      </li>
   *             <li>
   *      		        <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *      	      </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the key pairs.</p>
   */
  KeyPairIds?: string[];

  /**
   * <p>The key pair names.</p>
   *          <p>Default: Describes all your key pairs.</p>
   */
  KeyNames?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeKeyPairsRequest {
  export const filterSensitiveLog = (obj: DescribeKeyPairsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a key pair.</p>
 */
export interface KeyPairInfo {
  /**
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>Any tags applied to the key pair.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>If you used <a>CreateKeyPair</a> to create the key pair, this is the SHA-1 digest of the DER encoded private key.
   *         If you used <a>ImportKeyPair</a> to provide AWS the public key, this is the MD5 public key fingerprint as specified in section 4 of RFC4716.</p>
   */
  KeyFingerprint?: string;
}

export namespace KeyPairInfo {
  export const filterSensitiveLog = (obj: KeyPairInfo): any => ({
    ...obj,
  });
}

export interface DescribeKeyPairsResult {
  /**
   * <p>Information about the key pairs.</p>
   */
  KeyPairs?: KeyPairInfo[];
}

export namespace DescribeKeyPairsResult {
  export const filterSensitiveLog = (obj: DescribeKeyPairsResult): any => ({
    ...obj,
  });
}

export interface DescribeLaunchTemplatesRequest {
  /**
   * <p>One or more launch template IDs.</p>
   */
  LaunchTemplateIds?: string[];

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 1 and 200.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more launch template names.</p>
   */
  LaunchTemplateNames?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>create-time</code> - The time the launch template was created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch-template-name</code> - The name of the launch template.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeLaunchTemplatesRequest {
  export const filterSensitiveLog = (obj: DescribeLaunchTemplatesRequest): any => ({
    ...obj,
  });
}

export interface DescribeLaunchTemplatesResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the launch templates.</p>
   */
  LaunchTemplates?: LaunchTemplate[];
}

export namespace DescribeLaunchTemplatesResult {
  export const filterSensitiveLog = (obj: DescribeLaunchTemplatesResult): any => ({
    ...obj,
  });
}

export interface DescribeLaunchTemplateVersionsRequest {
  /**
   * <p>The version number up to which to describe launch template versions.</p>
   */
  MaxVersion?: string;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the launch template. To describe one or more versions of a specified launch
   *             template, you must specify either the launch template ID or the launch template name in
   *             the request. To describe all the latest or default launch template versions in your
   *             account, you must omit this parameter.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 1 and 200.</p>
   */
  MaxResults?: number;

  /**
   * <p>The version number after which to describe launch template versions.</p>
   */
  MinVersion?: string;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time the launch template version was created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ebs-optimized</code> - A boolean that indicates whether the instance
   *                     is optimized for Amazon EBS I/O.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>iam-instance-profile</code> - The ARN of the IAM instance
   *                     profile.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>image-id</code> - The ID of the AMI.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-type</code> - The instance type.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-default-version</code> - A boolean that indicates whether the
   *                     launch template version is the default version.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ram-disk-id</code> - The RAM disk ID.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more versions of the launch template. Valid values depend on whether you are describing a specified launch template (by ID or name) or all launch templates in your account.</p>
   *             <p>To describe one or more versions of a specified launch template, valid values are <code>$Latest</code>, <code>$Default</code>, and numbers.</p>
   *             <p>To describe all launch templates in your account that are defined as the latest
   *             version, the valid value is <code>$Latest</code>. To describe all launch templates in
   *             your account that are defined as the default version, the valid value is
   *                 <code>$Default</code>. You can specify <code>$Latest</code> and
   *                 <code>$Default</code> in the same call. You cannot specify numbers.</p>
   */
  Versions?: string[];

  /**
   * <p>The name of the launch template. To describe one or more versions of a specified
   *             launch template, you must specify either the launch template ID or the launch template
   *             name in the request. To describe all the latest or default launch template versions in
   *             your account, you must omit this parameter.</p>
   */
  LaunchTemplateName?: string;
}

export namespace DescribeLaunchTemplateVersionsRequest {
  export const filterSensitiveLog = (obj: DescribeLaunchTemplateVersionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeLaunchTemplateVersionsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the launch template versions.</p>
   */
  LaunchTemplateVersions?: LaunchTemplateVersion[];
}

export namespace DescribeLaunchTemplateVersionsResult {
  export const filterSensitiveLog = (obj: DescribeLaunchTemplateVersionsResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTablesRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The IDs of the local gateway route tables.</p>
   */
  LocalGatewayRouteTableIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of a local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the local gateway route table.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeLocalGatewayRouteTablesRequest {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayRouteTablesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway route table.</p>
 */
export interface LocalGatewayRouteTable {
  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The state of the local gateway route table.</p>
   */
  State?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The AWS account ID that owns the local gateway route table.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The tags assigned to the local gateway route table.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayRouteTable {
  export const filterSensitiveLog = (obj: LocalGatewayRouteTable): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTablesResult {
  /**
   * <p>Information about the local gateway route tables.</p>
   */
  LocalGatewayRouteTables?: LocalGatewayRouteTable[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewayRouteTablesResult {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayRouteTablesResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-id</code> - The ID of the virtual interface group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The IDs of the associations.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds?: string[];
}

export namespace DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  export const filterSensitiveLog = (
    obj: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest
  ): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a local gateway route table and a virtual interface group.</p>
 */
export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  /**
   * <p>The tags assigned to the association.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the virtual interface group.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The AWS account ID that owns the local gateway virtual interface group association.</p>
   */
  OwnerId?: string;
}

export namespace LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  export const filterSensitiveLog = (obj: LocalGatewayRouteTableVirtualInterfaceGroupAssociation): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the associations.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociations?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation[];
}

export namespace DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  export const filterSensitiveLog = (
    obj: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult
  ): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   */
  LocalGatewayRouteTableVpcAssociationIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-vpc-association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayRouteTableVpcAssociationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTableVpcAssociationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the associations.</p>
   */
  LocalGatewayRouteTableVpcAssociations?: LocalGatewayRouteTableVpcAssociation[];
}

export namespace DescribeLocalGatewayRouteTableVpcAssociationsResult {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayRouteTableVpcAssociationsResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewaysRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-id</code> - The ID of the virtual interface group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
   *             </li>
   *          </ul>
   */
  LocalGatewayIds?: string[];

  /**
   * <p>One or more filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeLocalGatewaysRequest {
  export const filterSensitiveLog = (obj: DescribeLocalGatewaysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway.</p>
 */
export interface LocalGateway {
  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The state of the local gateway.</p>
   */
  State?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The tags assigned to the local gateway.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The AWS account ID that owns the local gateway.</p>
   */
  OwnerId?: string;
}

export namespace LocalGateway {
  export const filterSensitiveLog = (obj: LocalGateway): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewaysResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the local gateways.</p>
   */
  LocalGateways?: LocalGateway[];
}

export namespace DescribeLocalGatewaysResult {
  export const filterSensitiveLog = (obj: DescribeLocalGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The IDs of the virtual interface groups.</p>
   */
  LocalGatewayVirtualInterfaceGroupIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-id</code> - The ID of the virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-group-id</code> - The ID of the virtual interface group.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  export const filterSensitiveLog = (obj: DescribeLocalGatewayVirtualInterfaceGroupsRequest): any => ({
    ...obj,
  });
}
