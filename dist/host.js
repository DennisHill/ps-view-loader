module.exports = function (str) {
  let factory = {},
    version = "1.0.0";
  switch (str) {
    case '191':
      factory = {
        version: version,
        protocol: "ws:",
        host: "192.168.1.191",
        origin: "http://192.168.1.191/"
      };
      break;
    case '199':
      factory = {
        version: version,
        protocol: "ws:",
        host: "192.168.1.199",
        origin: "http://192.168.1.199"
      };
      break;
    case "91":
      factory = {
        version: version,
        protocol: "ws:",
        host: "10.26.10.91",
        origin: "http://10.26.10.91"
      };
      break;
    case 'tcl_proxy':
      factory = {
        version: version,
        protocol: "ws:",
        host: "192.168.1.149:8080",
        origin: "http://192.168.1.149:8080"
      };
      break;
    case 'tcl_production':
      factory = {
        version: version,
        protocol: "ws:",
        host: "10.126.72.150",
        origin: "http://10.126.72.150"
      };
      break;
    case 'tcl':
      factory = {
        version: version,
        protocol: "ws:",
        host: "47.94.14.146",
        origin: "http://47.94.14.146"
      };
      break;
    case 'guangxi':
      factory = {
        version: version,
        protocol: "ws:",
        host: "111.12.86.148:8443",
        origin: "http://111.12.86.148:8443"
      };
      break;
    case 'xinhuaxin':
      factory = {
        version: version,
        protocol: "ws:",
        host: "47.95.207.156",
        origin: "http://47.95.207.156"
      };
      break;
    case '116':
      factory = {
        version: version,
        protocol: "ws:",
        host: "192.168.1.116",
        origin: "http://192.168.1.116"
      };
      break;
    case '115':
      factory = {
        version: version,
        protocol: "ws:",
        host: "192.168.1.115",
        origin: "http://192.168.1.115"
      };
      break;
    case '122':
      factory = {
        version: version,
        protocol: "ws:",
        host: "192.168.1.122",
        origin: "http://192.168.1.122"
      };
      break;
    case '106':
      factory = {
        version: version,
        protocol: "ws:",
        host: "106.74.18.92",
        origin: "http://106.74.18.92"
      };
      break;
    case '129':
      factory = {
        version: version,
        protocol: "ws:",
        host: "192.168.1.129",
        origin: "http://192.168.1.129"
      };
      break;
    case '144':
      factory = {
        version: version,
        protocol: "ws:",
        host: "10.126.78.144",
        origin: "http://10.126.78.144"
      };
      break;
    case '156':
      factory = {
        version: version,
        protocol: "ws:",
        host: "47.95.207.156",
        origin: "http://47.95.207.156"
      };
      break;
    case '159':
      factory = {
        version: version,
        protocol: "wss:",
        host: "180.76.147.159",
        origin: "http://180.76.147.159"
      };
      break;
    case '112':
      factory = {
        version: version,
        protocol: "wss:",
        host: "192.168.1.112",
        origin: "http://192.168.1.112"
      };
      break;
    case '116':
      factory = {
        version: version,
        protocol: "wss:",
        host: "192.168.1.116",
        origin: "http://192.168.1.116"
      };
      break;
    case '117':
      factory = {
        version: version,
        protocol: "ws:",
        host: "192.168.1.117",
        origin: "http://192.168.1.117"
      };
      break;
    case '11680':
      factory = {
        version: version,
        protocol: "ws:",
        host: "36.110.36.118:11680",
        origin: "http://36.110.36.118:11680"
      };
      break;
    case '11780':
      factory = {
        version: version,
        protocol: "ws:",
        host: "36.110.36.118:11780",
        origin: "http://36.110.36.118:11780"
      };
      break;
    case 'yunneng':
      factory = {
        version: version,
        protocol: "wss:",
        host: "39.108.59.125",
        origin: "http://39.108.59.125"
      };
      break;
    case '204':
      factory = {
        version: version,
        protocol: "wss:",
        host: "180.76.166.204",
        origin: "http://180.76.166.204"
      };
      break;
    case 'raonecloud':
      factory = {
        version: version,
        protocol: "wss:",
        host: "yzt.raonecloud.com",
        origin: "https://yzt.raonecloud.com"
      };
      break;
    case '135':
      factory = {
        version: version,
        protocol: "wss:",
        host: "192.168.1.135",
        origin: "http://192.168.1.135"
      };
      break;
    case '139':
      factory = {
        version: version,
        protocol: "wss:",
        host: "192.168.1.139",
        origin: "http://192.168.1.139"
      };
      break;
    case '121':
      factory = {
        version: version,
        protocol: "wss:",
        host: "192.168.1.121",
        origin: "http://192.168.1.121"
      };
      break;
    case '131':
      factory = {
        version: version,
        protocol: "wss:",
        host: "192.168.1.131",
        origin: "https://192.168.1.131"
      };
      break;
    case '132':
      factory = {
        version: version,
        protocol: "wss:",
        host: "10.27.16.132",
        origin: "http://10.27.16.132"
      };
      break;
    case '133':
      factory = {
        version: version,
        protocol: "wss:",
        host: "10.27.16.133",
        origin: "http://10.27.16.133"
      };
      break;
    case '114':
      factory = {
        version: version,
        protocol: "wss:",
        host: "192.168.1.114",
        origin: "http://192.168.1.114"
      };
      break;
    case '118':
      factory = {
        version: version,
        protocol: "wss:",
        host: "36.110.36.118:6443",
        origin: "https://36.110.36.118:6443"
      };
      break;
    case 'demo':
      factory = {
        version: version,
        protocol: "wss:",
        host: "demo.proudsmart.com",
        origin: "http://demo.proudsmart.com"
      };
      break;
    case 'baidu':
      factory = {
        version: version,
        protocol: "wss:",
        host: "iot.proudsmart.com",
        origin: "https://iot.proudsmart.com"
      };
      break;
    case 'ouke':
      factory = {
        version: version,
        protocol: "wss:",
        host: "www.ek-cloud.net",
        origin: "http://www.ek-cloud.net"
      };
      break;
    case 'denuo':
      factory = {
        version: version,
        protocol: "wss:",
        host: "http://36.110.36.118:8099",
        origin: "http://36.110.36.118:8099"
      };
      break;
    default:
      throw new Error('w无效的访问链接');
      break;
  }
  return factory;
}