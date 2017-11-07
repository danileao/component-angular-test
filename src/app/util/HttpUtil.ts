import { RequestOptions, Headers } from '@angular/http';

export class HttpUtil {

    public static getRequestOptionsDefault(): RequestOptions {
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH');
        headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        let options = new RequestOptions({ headers });
        return options;
    }
}
