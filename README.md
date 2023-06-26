# nest-request-combiner

A simple package for `nestjs` to get `query` or `param` request data in `body Dto` or vice versa.

### Table of Contents  
- [Installation](#installation)
- [Features](#features)
- [Explanation](#explanation)

## Installation

To install it, using npm:

```shell
npm install nest-request-combiner
```
## Usage

1. To use this just add decorator on your controller method.

``` typescript
@InjectParamToBody()
 yourControllerMethod(
  @Param('id') id: number,
  @Body() yourDto: YourDto 
 )
 ```

After this in your `Dto`
``` typescript
export class YourDto {
  
    params: any;  // Add params property inside Dto

    @ValidateIf((args) => args.object.params.id)  // Now you can access your parameters like this. 
    property: string;
}
```
If you have set `whitelist: true` in your validation pipe. Then you must add `@Allow()` on `params` property.
 ## Features
 
 The library has following decorators to combine your request data:

 ### InjectParamToBody
 ### InjectParamToQuery
 ### InjectQueryToBody
 ### InjectQueryToParam
 ### InjectBodyToParam
 ### InjectBodyToQuery <br><br>

 #### Decorators Options
 By default all decorators strip the request property that is combined. To let it be combined set `shouldStrip: false`
