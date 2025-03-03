/*
 * @Description:验证码管理服务
 * @Author: RXC 廖欣星
 * @Date: 2019-04-22 10:19:56
 * @LastEditors: Rxc 陳平
 * @LastEditTime: 2020-08-27 17:09:49
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  Url = 'captcha';
  secondUrl = 'second/captcha';

  constructor(private http: HttpClient) {}

  /**
   * @description: 获取验证码
   * @return: 返回后台接口数据
   */
  getCaptcha(): Promise<any> {
    return this.http.get(this.Url).toPromise();
  }

  /**
   * @description: 验证验证码
   * @param id string
   * @param value string
   * @return: 返回后台接口数据
   */
  verifyCaptcha(id: string, value: string): Promise<any> {
    const params = {
      id: id,
      verify_value: value
    };
    return this.http.post(this.Url, params).toPromise();
  }

  /**
   * @description: 获取二次验证的验证码
   * @return: 返回后台数据
   */
  getSecondCaptcha(customerID: string, userID: string, email: string, noticeEmail: string): Promise<any> {
    const params = {
      customer_id: customerID,
      user_id: userID,
      email: email,
      notice_email: noticeEmail
    };
    return this.http
      .get(this.secondUrl, {
        params: params
      })
      .toPromise();
  }

  /**
   * @description: 验证二次验证码
   * @param id string
   * @param value string
   * @return: 返回后台接口数据
   */
  VerifySecondCaptcha(id: string, value: string): Promise<any> {
    const params = {
      id: id,
      verify_value: value
    };
    return this.http.post(this.secondUrl, params).toPromise();
  }
}
