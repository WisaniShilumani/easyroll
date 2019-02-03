import { HttpHeaders } from '@angular/common/http'

export abstract class BaseApiService {
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  readonly endpoint: string
}
