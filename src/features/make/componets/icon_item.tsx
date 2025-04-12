import { Icon, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import '../styles/icon_item.scss';
export function IconItem() {
  return (
    <div className="icon-item">
      <Icon>
        <ArrowBack color="primary" />
      </Icon>
    </div>
  );
}
