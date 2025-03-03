/*
 * @Author: RXC 呉見華
 * @Date: 2019-12-04 13:44:50
 * @LastEditTime : 2020-01-10 14:20:22
 * @LastEditors  : RXC 呉見華
 * @Description: 选择管道
 * @FilePath: /web-ui/src/app/shared/pipe/option/option.pipe.ts
 */

import { Pipe, PipeTransform } from '@angular/core';
import { CommonService } from '@core';

@Pipe({
  name: 'option'
})
export class OptionPipe implements PipeTransform {
  constructor(private common: CommonService) {}

  /**
   * @description: 选项转换
   */
  transform(value: string): string {
    const optionList = this.common.getOptionList();

    const option = optionList.find(o => o.value === value);
    if (option) {
      return option.label;
    }
    return '';
  }
}
