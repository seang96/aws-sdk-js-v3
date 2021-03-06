import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetReusableDelegationSetLimitRequest, GetReusableDelegationSetLimitResponse } from "../models/models_0";
import {
  deserializeAws_restXmlGetReusableDelegationSetLimitCommand,
  serializeAws_restXmlGetReusableDelegationSetLimitCommand,
} from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetReusableDelegationSetLimitCommandInput = GetReusableDelegationSetLimitRequest;
export type GetReusableDelegationSetLimitCommandOutput = GetReusableDelegationSetLimitResponse & __MetadataBearer;

export class GetReusableDelegationSetLimitCommand extends $Command<
  GetReusableDelegationSetLimitCommandInput,
  GetReusableDelegationSetLimitCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetReusableDelegationSetLimitCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReusableDelegationSetLimitCommandInput, GetReusableDelegationSetLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetReusableDelegationSetLimitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReusableDelegationSetLimitRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetReusableDelegationSetLimitResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetReusableDelegationSetLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetReusableDelegationSetLimitCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReusableDelegationSetLimitCommandOutput> {
    return deserializeAws_restXmlGetReusableDelegationSetLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
