import http from "node:http";

export const serviceName = "shared_asset_custody";
export function createServer() {
  return http.createServer((request, response) => {
    if (request.url !== "/health" || request.method !== "GET") {
      response.writeHead(404).end(); return;
    }
    const body = JSON.stringify({status: "ok", service: serviceName});
    response.writeHead(200, {"content-type": "application/json; charset=utf-8", "content-length": Buffer.byteLength(body)});
    response.end(body);
  });
}
if (process.argv[1] === new URL(import.meta.url).pathname) {
  createServer().listen(Number(process.env.PORT ?? 8080), process.env.HOST ?? "0.0.0.0");
}