import React from 'react';
import { Alert, Affix as S, AutoComplete } from 'antd';
import Drawer from "material-ui/Drawer";
import { OtherComponent } from './other';
import forEach from "lodash/forEach";
import { skip, take, switchMap as SwitchMap } from 'rxjs/operators';
export class Test extends React.PureComponent<void, void> {
    render() {
        return (<OtherComponent>
        <Alert message='hello world'/>
      </OtherComponent>);
    }
}
