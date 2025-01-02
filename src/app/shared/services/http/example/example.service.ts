import { HttpClient } from "@angular/common/http";
import { BaseService } from "../base.service";
import { Observable } from "rxjs";
import { HttpResponseDTO } from "../../../models/http.response.dto";

export  class ExampleService extends BaseService {
  constructor(
    httpService: HttpClient
  ) {
    super(httpService, 'example')
  }

  getExampleByDescription(desc: string):Observable<HttpResponseDTO<any>> {
    return this.httpService.get<any>(`${this.baseUrl}?desc=${desc}`);
  }
}