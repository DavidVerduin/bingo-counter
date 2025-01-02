import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { HttpResponseDTO } from "../../models/http.response.dto";

export class BaseService {
  public baseUrl: string;
  constructor(
    protected httpService: HttpClient,
    baseUrl: string
  ) {
    this.baseUrl = `${environment.API_URL}/${baseUrl}`;
  }

  get<T>(id: number | string):Observable<HttpResponseDTO<T>> {
    return this.httpService.get<HttpResponseDTO<T>>(`${this.baseUrl}/${id}`);
  }

  getList<T>():Observable<HttpResponseDTO<T>> {
    return this.httpService.get<HttpResponseDTO<T>>(`${this.baseUrl}`);
  }

  post<T, P>(body: P):Observable<HttpResponseDTO<T>> {
    return this.httpService.post<HttpResponseDTO<T>>(`${this.baseUrl}`, body);
  }

  put<T, P>(id: number | string, body: P):Observable<HttpResponseDTO<T>> {
    return this.httpService.put<HttpResponseDTO<T>>(`${this.baseUrl}`, body);
  }

  delete<T>(id: number | string):Observable<HttpResponseDTO<T>> {
    return this.httpService.delete<HttpResponseDTO<T>>(`${this.baseUrl}/${id}`);
  }
}