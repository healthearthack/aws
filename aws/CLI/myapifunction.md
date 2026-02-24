(.venv) C:\Users\Owner\my-api-function>pip install aws-cdk-lib constructs
Requirement already satisfied: aws-cdk-lib in c:\users\owner\my-api-function\.venv\lib\site-packages (2.239.0)
Requirement already satisfied: constructs in c:\users\owner\my-api-function\.venv\lib\site-packages (10.5.1)
Requirement already satisfied: aws-cdk.asset-awscli-v1==2.2.263 in c:\users\owner\my-api-function\.venv\lib\site-packages (from aws-cdk-lib) (2.2.263)
Requirement already satisfied: aws-cdk.asset-node-proxy-agent-v6<3.0.0,>=2.1.0 in c:\users\owner\my-api-function\.venv\lib\site-packages (from aws-cdk-lib) (2.1.0)
Requirement already satisfied: aws-cdk.cloud-assembly-schema<51.0.0,>=50.3.0 in c:\users\owner\my-api-function\.venv\lib\site-packages (from aws-cdk-lib) (50.4.0)
Requirement already satisfied: jsii<2.0.0,>=1.126.0 in c:\users\owner\my-api-function\.venv\lib\site-packages (from aws-cdk-lib) (1.126.0)
Requirement already satisfied: publication>=0.0.3 in c:\users\owner\my-api-function\.venv\lib\site-packages (from aws-cdk-lib) (0.0.3)
Requirement already satisfied: typeguard==2.13.3 in c:\users\owner\my-api-function\.venv\lib\site-packages (from aws-cdk-lib) (2.13.3)
Requirement already satisfied: attrs<26.0,>=21.2 in c:\users\owner\my-api-function\.venv\lib\site-packages (from jsii<2.0.0,>=1.126.0->aws-cdk-lib) (25.4.0)
Requirement already satisfied: cattrs<25.4,>=1.8 in c:\users\owner\my-api-function\.venv\lib\site-packages (from jsii<2.0.0,>=1.126.0->aws-cdk-lib) (25.3.0)
Requirement already satisfied: importlib_resources>=5.2.0 in c:\users\owner\my-api-function\.venv\lib\site-packages (from jsii<2.0.0,>=1.126.0->aws-cdk-lib) (6.5.2)
Requirement already satisfied: python-dateutil in c:\users\owner\my-api-function\.venv\lib\site-packages (from jsii<2.0.0,>=1.126.0->aws-cdk-lib) (2.9.0.post0)
Requirement already satisfied: typing_extensions<5.0,>=3.8 in c:\users\owner\my-api-function\.venv\lib\site-packages (from jsii<2.0.0,>=1.126.0->aws-cdk-lib) (4.15.0)
Requirement already satisfied: six>=1.5 in c:\users\owner\my-api-function\.venv\lib\site-packages (from python-dateutil->jsii<2.0.0,>=1.126.0->aws-cdk-lib) (1.17.0)

[notice] A new release of pip is available: 25.0.1 -> 26.0.1
[notice] To update, run: python.exe -m pip install --upgrade pip

(.venv) C:\Users\Owner\my-api-function>npm install -g aws-cdk

changed 1 package in 2s

(.venv) C:\Users\Owner\my-api-function>cdk bootstrap
 ⏳  Bootstrapping environment aws://249746593588/us-east-1...
Trusted accounts for deployment: (none)
Trusted accounts for lookup: (none)
Using default execution policy of 'arn:aws:iam::aws:policy/AdministratorAccess'. Pass '--cloudformation-execution-policies' to customize.
 ✅  Environment aws://249746593588/us-east-1 bootstrapped (no changes).

(.venv) C:\Users\Owner\my-api-function>cdk deploy

✨  Synthesis time: 8.92s

MyProductApiStack: start: Building ApiFunction/Code
MyProductApiStack: success: Built ApiFunction/Code
MyProductApiStack: start: Building MyProductApiStack Template
MyProductApiStack: success: Built MyProductApiStack Template
MyProductApiStack: start: Publishing ApiFunction/Code (current_account-current_region-95cbca4e)
MyProductApiStack: start: Publishing MyProductApiStack Template (current_account-current_region-8226374a)
MyProductApiStack: success: Published MyProductApiStack Template (current_account-current_region-8226374a)
MyProductApiStack: success: Published ApiFunction/Code (current_account-current_region-95cbca4e)
Stack MyProductApiStack
IAM Statement Changes
┌───┬───────┬───────┬───────┬───────┬───────┐
│   │ Resou │ Effec │ Actio │ Princ │ Condi │
│   │ rce   │ t     │ n     │ ipal  │ tion  │
├───┼───────┼───────┼───────┼───────┼───────┤
│ + │ ${Api │ Allow │ lambd │ Servi │ "ArnL │
│   │ Funct │       │ a:Inv │ ce:ap │ ike": │
│   │ ion.A │       │ okeFu │ igate │  {    │
│   │ rn}   │       │ nctio │ way.a │   "AW │
│   │       │       │ n     │ mazon │ S:Sou │
│   │       │       │       │ aws.c │ rceAr │
│   │       │       │       │ om    │ n": " │
│   │       │       │       │       │ arn:$ │
│   │       │       │       │       │ {AWS: │
│   │       │       │       │       │ :Part │
│   │       │       │       │       │ ition │
│   │       │       │       │       │ }:exe │
│   │       │       │       │       │ cute- │
│   │       │       │       │       │ api:$ │
│   │       │       │       │       │ {AWS: │
│   │       │       │       │       │ :Regi │
│   │       │       │       │       │ on}:$ │
│   │       │       │       │       │ {AWS: │
│   │       │       │       │       │ :Acco │
│   │       │       │       │       │ untId │
│   │       │       │       │       │ }:${P │
│   │       │       │       │       │ roduc │
│   │       │       │       │       │ tApi6 │
│   │       │       │       │       │ 3AD16 │
│   │       │       │       │       │ 0A}/$ │
│   │       │       │       │       │ {Prod │
│   │       │       │       │       │ uctAp │
│   │       │       │       │       │ i/Dep │
│   │       │       │       │       │ loyme │
│   │       │       │       │       │ ntSta │
│   │       │       │       │       │ ge.pr │
│   │       │       │       │       │ od}/* │
│   │       │       │       │       │ /*"   │
│   │       │       │       │       │ }     │
│ + │ ${Api │ Allow │ lambd │ Servi │ "ArnL │
│   │ Funct │       │ a:Inv │ ce:ap │ ike": │
│   │ ion.A │       │ okeFu │ igate │  {    │
│   │ rn}   │       │ nctio │ way.a │   "AW │
│   │       │       │ n     │ mazon │ S:Sou │
│   │       │       │       │ aws.c │ rceAr │
│   │       │       │       │ om    │ n": " │
│   │       │       │       │       │ arn:$ │
│   │       │       │       │       │ {AWS: │
│   │       │       │       │       │ :Part │
│   │       │       │       │       │ ition │
│   │       │       │       │       │ }:exe │
│   │       │       │       │       │ cute- │
│   │       │       │       │       │ api:$ │
│   │       │       │       │       │ {AWS: │
│   │       │       │       │       │ :Regi │
│   │       │       │       │       │ on}:$ │
│   │       │       │       │       │ {AWS: │
│   │       │       │       │       │ :Acco │
│   │       │       │       │       │ untId │
│   │       │       │       │       │ }:${P │
│   │       │       │       │       │ roduc │
│   │       │       │       │       │ tApi6 │
│   │       │       │       │       │ 3AD16 │
│   │       │       │       │       │ 0A}/t │
│   │       │       │       │       │ est-i │
│   │       │       │       │       │ nvoke │
│   │       │       │       │       │ -stag │
│   │       │       │       │       │ e/*/* │
│   │       │       │       │       │ "     │
│   │       │       │       │       │ }     │
│ + │ ${Api │ Allow │ lambd │ Servi │ "ArnL │
│   │ Funct │       │ a:Inv │ ce:ap │ ike": │
│   │ ion.A │       │ okeFu │ igate │  {    │
│   │ rn}   │       │ nctio │ way.a │   "AW │
│   │       │       │ n     │ mazon │ S:Sou │
│   │       │       │       │ aws.c │ rceAr │
│   │       │       │       │ om    │ n": " │
│   │       │       │       │       │ arn:$ │
│   │       │       │       │       │ {AWS: │
│   │       │       │       │       │ :Part │
│   │       │       │       │       │ ition │
│   │       │       │       │       │ }:exe │
│   │       │       │       │       │ cute- │
│   │       │       │       │       │ api:$ │
│   │       │       │       │       │ {AWS: │
│   │       │       │       │       │ :Regi │
│   │       │       │       │       │ on}:$ │
│   │       │       │       │       │ {AWS: │
│   │       │       │       │       │ :Acco │
│   │       │       │       │       │ untId │
│   │       │       │       │       │ }:${P │
│   │       │       │       │       │ roduc │
│   │       │       │       │       │ tApi6 │
│   │       │       │       │       │ 3AD16 │
│   │       │       │       │       │ 0A}/$ │
│   │       │       │       │       │ {Prod │
│   │       │       │       │       │ uctAp │
│   │       │       │       │       │ i/Dep │
│   │       │       │       │       │ loyme │
│   │       │       │       │       │ ntSta │
│   │       │       │       │       │ ge.pr │
│   │       │       │       │       │ od}/* │
│   │       │       │       │       │ /"    │
│   │       │       │       │       │ }     │
│ + │ ${Api │ Allow │ lambd │ Servi │ "ArnL │
│   │ Funct │       │ a:Inv │ ce:ap │ ike": │
│   │ ion.A │       │ okeFu │ igate │  {    │
│   │ rn}   │       │ nctio │ way.a │   "AW │
│   │       │       │ n     │ mazon │ S:Sou │
│   │       │       │       │ aws.c │ rceAr │
│   │       │       │       │ om    │ n": " │
│   │       │       │       │       │ arn:$ │
│   │       │       │       │       │ {AWS: │
│   │       │       │       │       │ :Part │
│   │       │       │       │       │ ition │
│   │       │       │       │       │ }:exe │
│   │       │       │       │       │ cute- │
│   │       │       │       │       │ api:$ │
│   │       │       │       │       │ {AWS: │
│   │       │       │       │       │ :Regi │
│   │       │       │       │       │ on}:$ │
│   │       │       │       │       │ {AWS: │
│   │       │       │       │       │ :Acco │
│   │       │       │       │       │ untId │
│   │       │       │       │       │ }:${P │
│   │       │       │       │       │ roduc │
│   │       │       │       │       │ tApi6 │
│   │       │       │       │       │ 3AD16 │
│   │       │       │       │       │ 0A}/t │
│   │       │       │       │       │ est-i │
│   │       │       │       │       │ nvoke │
│   │       │       │       │       │ -stag │
│   │       │       │       │       │ e/*/" │
│   │       │       │       │       │ }     │
├───┼───────┼───────┼───────┼───────┼───────┤
│ + │ ${Api │ Allow │ sts:A │ Servi │       │
│   │ Funct │       │ ssume │ ce:la │       │
│   │ ion/S │       │ Role  │ mbda. │       │
│   │ ervic │       │       │ amazo │       │
│   │ eRole │       │       │ naws. │       │
│   │ .Arn} │       │       │ com   │       │
├───┼───────┼───────┼───────┼───────┼───────┤
│ + │ ${Pro │ Allow │ sts:A │ Servi │       │
│   │ ductA │       │ ssume │ ce:ap │       │
│   │ pi/Cl │       │ Role  │ igate │       │
│   │ oudWa │       │       │ way.a │       │
│   │ tchRo │       │       │ mazon │       │
│   │ le.Ar │       │       │ aws.c │       │
│   │ n}    │       │       │ om    │       │
└───┴───────┴───────┴───────┴───────┴───────┘
IAM Policy Changes
┌───┬───────────────────┬───────────────────┐
│   │ Resource          │ Managed Policy AR │
│   │                   │ N                 │
├───┼───────────────────┼───────────────────┤
│ + │ ${ApiFunction/Ser │ arn:${AWS::Partit │
│   │ viceRole}         │ ion}:iam::aws:pol │
│   │                   │ icy/service-role/ │
│   │                   │ AWSLambdaBasicExe │
│   │                   │ cutionRole        │
├───┼───────────────────┼───────────────────┤
│ + │ ${ProductApi/Clou │ arn:${AWS::Partit │
│   │ dWatchRole}       │ ion}:iam::aws:pol │
│   │                   │ icy/service-role/ │
│   │                   │ AmazonAPIGatewayP │
│   │                   │ ushToCloudWatchLo │
│   │                   │ gs                │
└───┴───────────────────┴───────────────────┘
(NOTE: There may be security-related changes not in this list. See https://github.com/aws/aws-cdk/issues/1299)

to deploy these changes' (y/n) y
MyProductApiStack: deploying... [1/1]
MyProductApiStack: creating CloudFormation changeset...
MyProductApiStack |  0/16 | 6:10:50 PM | REVIEW_IN_PROGRESS   | AWS::CloudFormation::Stack  | MyProductApiStack User Initiated
MyProductApiStack |  0/16 | 6:10:56 PM | CREATE_IN_PROGRESS   | AWS::CloudFormation::Stack  | MyProductApiStack User Initiated
MyProductApiStack |  0/16 | 6:10:59 PM | CREATE_IN_PROGRESS   | AWS::IAM::Role              | ProductApi/CloudWatchRole (ProductApiCloudWatchRole4304298C)
MyProductApiStack |  0/16 | 6:10:59 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::RestApi    | ProductApi (ProductApi63AD160A)
MyProductApiStack |  0/16 | 6:10:59 PM | CREATE_IN_PROGRESS   | AWS::IAM::Role              | ApiFunction/ServiceRole (ApiFunctionServiceRole52B9747B)
MyProductApiStack |  0/16 | 6:10:59 PM | CREATE_IN_PROGRESS   | AWS::CDK::Metadata          | CDKMetadata/Default (CDKMetadata)
MyProductApiStack |  0/16 | 6:10:59 PM | CREATE_IN_PROGRESS   | AWS::IAM::Role              | ProductApi/CloudWatchRole (ProductApiCloudWatchRole4304298C) Resource creation Initiated
MyProductApiStack |  0/16 | 6:11:00 PM | CREATE_IN_PROGRESS   | AWS::CDK::Metadata          | CDKMetadata/Default (CDKMetadata) Resource creation Initiated
MyProductApiStack |  0/16 | 6:11:00 PM | CREATE_IN_PROGRESS   | AWS::IAM::Role              | ApiFunction/ServiceRole (ApiFunctionServiceRole52B9747B) Resource creation Initiated
MyProductApiStack |  1/16 | 6:11:00 PM | CREATE_COMPLETE      | AWS::CDK::Metadata          | CDKMetadata/Default (CDKMetadata)
MyProductApiStack |  1/16 | 6:11:00 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::RestApi    | ProductApi (ProductApi63AD160A) Resource creation Initiated
MyProductApiStack |  2/16 | 6:11:01 PM | CREATE_COMPLETE      | AWS::ApiGateway::RestApi    | ProductApi (ProductApi63AD160A)
MyProductApiStack |  2/16 | 6:11:02 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::Resource   | ProductApi/Default/{proxy+} (ProductApiproxy66ED20E7)
MyProductApiStack |  2/16 | 6:11:03 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::Resource   | ProductApi/Default/{proxy+} (ProductApiproxy66ED20E7) Resource creation Initiated
MyProductApiStack |  3/16 | 6:11:03 PM | CREATE_COMPLETE      | AWS::ApiGateway::Resource   | ProductApi/Default/{proxy+} (ProductApiproxy66ED20E7)
MyProductApiStack |  4/16 | 6:11:16 PM | CREATE_COMPLETE      | AWS::IAM::Role              | ProductApi/CloudWatchRole (ProductApiCloudWatchRole4304298C)
MyProductApiStack |  5/16 | 6:11:16 PM | CREATE_COMPLETE      | AWS::IAM::Role              | ApiFunction/ServiceRole (ApiFunctionServiceRole52B9747B)
MyProductApiStack |  5/16 | 6:11:17 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::Account    | ProductApi/Account (ProductApiAccountEEE6647B)
MyProductApiStack |  5/16 | 6:11:17 PM | CREATE_IN_PROGRESS   | AWS::Lambda::Function       | ApiFunction (ApiFunctionCE271BD4)
MyProductApiStack |  5/16 | 6:11:18 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::Account    | ProductApi/Account (ProductApiAccountEEE6647B) Resource creation Initiated
MyProductApiStack |  6/16 | 6:11:19 PM | CREATE_COMPLETE      | AWS::ApiGateway::Account    | ProductApi/Account (ProductApiAccountEEE6647B)
MyProductApiStack |  6/16 | 6:11:19 PM | CREATE_IN_PROGRESS   | AWS::Lambda::Function       | ApiFunction (ApiFunctionCE271BD4) Resource creation Initiated
MyProductApiStack |  6/16 | 6:11:20 PM | CREATE_IN_PROGRESS   | AWS::Lambda::Function       | ApiFunction (ApiFunctionCE271BD4) Eventual consistency check initiated
MyProductApiStack |  6/16 | 6:11:20 PM | CREATE_IN_PROGRESS   | AWS::Lambda::Permission     | ProductApi/Default/ANY/ApiPermission.Test.MyProductApiStackProductApi44939485.ANY.. (ProductApiANYApiPermissionTestMyProductApiStackProductApi44939485ANYBE170A90)
MyProductApiStack |  6/16 | 6:11:20 PM | CREATE_IN_PROGRESS   | AWS::Lambda::Permission     | ProductApi/Default/{proxy+}/ANY/ApiPermission.Test.MyProductApiStackProductApi44939485.ANY..{proxy+} (ProductApiproxyANYApiPermissionTestMyProductApiStackProductApi44939485ANYproxyBEEA6774)
MyProductApiStack |  6/16 | 6:11:20 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::Method     | ProductApi/Default/{proxy+}/ANY (ProductApiproxyANYB3C37510)
MyProductApiStack |  6/16 | 6:11:20 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::Method     | ProductApi/Default/ANY (ProductApiANY17C450FF)
MyProductApiStack |  6/16 | 6:11:21 PM | CREATE_IN_PROGRESS   | AWS::Lambda::Permission     | ProductApi/Default/{proxy+}/ANY/ApiPermission.Test.MyProductApiStackProductApi44939485.ANY..{proxy+} (ProductApiproxyANYApiPermissionTestMyProductApiStackProductApi44939485ANYproxyBEEA6774) Resource creation Initiated
MyProductApiStack |  6/16 | 6:11:21 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::Method     | ProductApi/Default/{proxy+}/ANY (ProductApiproxyANYB3C37510) Resource creation Initiated
MyProductApiStack |  6/16 | 6:11:21 PM | CREATE_IN_PROGRESS   | AWS::Lambda::Permission     | ProductApi/Default/ANY/ApiPermission.Test.MyProductApiStackProductApi44939485.ANY.. (ProductApiANYApiPermissionTestMyProductApiStackProductApi44939485ANYBE170A90) Resource creation Initiated
MyProductApiStack |  6/16 | 6:11:21 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::Method     | ProductApi/Default/ANY (ProductApiANY17C450FF) Resource creation Initiated
MyProductApiStack |  7/16 | 6:11:22 PM | CREATE_COMPLETE      | AWS::Lambda::Permission     | ProductApi/Default/{proxy+}/ANY/ApiPermission.Test.MyProductApiStackProductApi44939485.ANY..{proxy+} (ProductApiproxyANYApiPermissionTestMyProductApiStackProductApi44939485ANYproxyBEEA6774)
MyProductApiStack |  8/16 | 6:11:22 PM | CREATE_COMPLETE      | AWS::Lambda::Permission     | ProductApi/Default/ANY/ApiPermission.Test.MyProductApiStackProductApi44939485.ANY.. (ProductApiANYApiPermissionTestMyProductApiStackProductApi44939485ANYBE170A90)
MyProductApiStack |  9/16 | 6:11:23 PM | CREATE_COMPLETE      | AWS::ApiGateway::Method     | ProductApi/Default/ANY (ProductApiANY17C450FF)
MyProductApiStack | 10/16 | 6:11:23 PM | CREATE_COMPLETE      | AWS::ApiGateway::Method     | ProductApi/Default/{proxy+}/ANY (ProductApiproxyANYB3C37510)
MyProductApiStack | 11/16 | 6:11:25 PM | CREATE_COMPLETE      | AWS::Lambda::Function       | ApiFunction (ApiFunctionCE271BD4)
MyProductApiStack | 11/16 | 6:11:26 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::Deployment | ProductApi/Deployment (ProductApiDeploymentAB5FBC639ed2470d8c469a0b777558ba2dd52ef4)
MyProductApiStack | 11/16 | 6:11:27 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::Deployment | ProductApi/Deployment (ProductApiDeploymentAB5FBC639ed2470d8c469a0b777558ba2dd52ef4) Resource creation Initiated
MyProductApiStack | 12/16 | 6:11:27 PM | CREATE_COMPLETE      | AWS::ApiGateway::Deployment | ProductApi/Deployment (ProductApiDeploymentAB5FBC639ed2470d8c469a0b777558ba2dd52ef4)
MyProductApiStack | 12/16 | 6:11:28 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::Stage      | ProductApi/DeploymentStage.prod (ProductApiDeploymentStageprod9B123BA2)
MyProductApiStack | 12/16 | 6:11:29 PM | CREATE_IN_PROGRESS   | AWS::ApiGateway::Stage      | ProductApi/DeploymentStage.prod (ProductApiDeploymentStageprod9B123BA2) Resource creation Initiated
MyProductApiStack | 13/16 | 6:11:31 PM | CREATE_COMPLETE      | AWS::ApiGateway::Stage      | ProductApi/DeploymentStage.prod (ProductApiDeploymentStageprod9B123BA2)
MyProductApiStack | 13/16 | 6:11:32 PM | CREATE_IN_PROGRESS   | AWS::Lambda::Permission     | ProductApi/Default/{proxy+}/ANY/ApiPermission.MyProductApiStackProductApi44939485.ANY..{proxy+} (ProductApiproxyANYApiPermissionMyProductApiStackProductApi44939485ANYproxy8AEB0D1A)
MyProductApiStack | 13/16 | 6:11:32 PM | CREATE_IN_PROGRESS   | AWS::Lambda::Permission     | ProductApi/Default/ANY/ApiPermission.MyProductApiStackProductApi44939485.ANY.. (ProductApiANYApiPermissionMyProductApiStackProductApi44939485ANYF8A8A78E)
MyProductApiStack | 13/16 | 6:11:32 PM | CREATE_IN_PROGRESS   | AWS::Lambda::Permission     | ProductApi/Default/{proxy+}/ANY/ApiPermission.MyProductApiStackProductApi44939485.ANY..{proxy+} (ProductApiproxyANYApiPermissionMyProductApiStackProductApi44939485ANYproxy8AEB0D1A) Resource creation Initiated
MyProductApiStack | 13/16 | 6:11:33 PM | CREATE_IN_PROGRESS   | AWS::Lambda::Permission     | ProductApi/Default/ANY/ApiPermission.MyProductApiStackProductApi44939485.ANY.. (ProductApiANYApiPermissionMyProductApiStackProductApi44939485ANYF8A8A78E) Resource creation Initiated
MyProductApiStack | 14/16 | 6:11:33 PM | CREATE_COMPLETE      | AWS::Lambda::Permission     | ProductApi/Default/{proxy+}/ANY/ApiPermission.MyProductApiStackProductApi44939485.ANY..{proxy+} (ProductApiproxyANYApiPermissionMyProductApiStackProductApi44939485ANYproxy8AEB0D1A)
MyProductApiStack | 15/16 | 6:11:33 PM | CREATE_COMPLETE      | AWS::Lambda::Permission     | ProductApi/Default/ANY/ApiPermission.MyProductApiStackProductApi44939485.ANY.. (ProductApiANYApiPermissionMyProductApiStackProductApi44939485ANYF8A8A78E)
MyProductApiStack | 16/16 | 6:11:34 PM | CREATE_COMPLETE      | AWS::CloudFormation::Stack  | MyProductApiStack

 ✅  MyProductApiStack

✨  Deployment time: 49.92s

Outputs:
MyProductApiStack.ProductApiEndpoint760E02C8 = https://ckzqrn241l.execute-api.us-east-1.amazonaws.com/prod/
Stack ARN:
arn:aws:cloudformation:us-east-1:249746593588:stack/MyProductApiStack/4689d6e0-1115-11f1-b24f-12c49ee85b0d

✨  Total time: 58.84s

live URL https://ckzqrn241l.execute-api.us-east-1.amazonaws.com/prod/

(.venv) C:\Users\Owner\my-api-function>
