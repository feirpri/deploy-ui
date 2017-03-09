/** Auto created by script; Author: 舍掉英熊 Updated: Thu Mar 09 2017 19:05:05 GMT+0800 (中国标准时间)**/
import AddBlock from '../packages/AddBlock/';
import AjaxErrorDialog from '../packages/AjaxErrorDialog/';
import AjaxProgress from '../packages/AjaxProgress/';
import AutoWidth from '../packages/AutoWidth/';
import ByteTransform from '../packages/ByteTransform/';
import Card from '../packages/Card/';
import Clipboard from '../packages/Clipboard/';
import DeltaTime from '../packages/DeltaTime/';
import Dialog from '../packages/Dialog/';
import Dropdown from '../packages/Dropdown/';
import Help from '../packages/Help/';
import Highchart from '../packages/Highchart/';
import Icon from '../packages/Icon/';
import InfoItem from '../packages/InfoItem/';
import LocalTime from '../packages/LocalTime/';
import Logo from '../packages/Logo/';
import Menu from '../packages/Menu/';
import OffCanvas from '../packages/OffCanvas/';
import RadioVersions from '../packages/RadioVersions/';
import RadioVersionsGroup from '../packages/RadioVersionsGroup/';
import RouterMap from '../packages/RouterMap/';
import Search from '../packages/Search/';
import User from '../packages/User/';

function install(Vue){
        [AddBlock, AjaxErrorDialog, AjaxProgress, AutoWidth, ByteTransform, Card, Clipboard, DeltaTime, Dialog, Dropdown, Help, Highchart, Icon, InfoItem, LocalTime, Logo, Menu, OffCanvas, RadioVersions, RadioVersionsGroup, RouterMap, Search, User].forEach(
            item => item.install(Vue)
        );
    }

export default {install,AddBlock,AjaxErrorDialog,AjaxProgress,AutoWidth,ByteTransform,Card,Clipboard,DeltaTime,Dialog,Dropdown,Help,Highchart,Icon,InfoItem,LocalTime,Logo,Menu,OffCanvas,RadioVersions,RadioVersionsGroup,RouterMap,Search,User}