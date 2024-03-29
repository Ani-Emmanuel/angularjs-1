// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  APP_URL: "https://pmtonline.herokuapp.com",
  PEACE_API: "https://jibrila.herokuapp.com/api",
  FLUTTERWAVE_TXN_URL:
    "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/hosted/pay",
  FLUTTERWAVE_VERIFY_URL:
    "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/verify",
  FLUTTERWAVE_REDIRECT_URL: "https://pmtonline.herokuapp.com/verify",
  FLUTTERWAVE_PUBLIC_KEY: "FLWPUBK-3936ae0e7f67dd4338ee36feacaf5b07-X",
  FLUTTERWAVE_SECRET_KEY: "FLWSECK-bb971402072265fb156e90a3578fe5e6-X",
  FLUTTERWAVE_ENCRYPTION: "<YOUR SECRET KEY>",
  FLUTTERWAVE_HASH: "<YOUR SECRET HASH>"
};
