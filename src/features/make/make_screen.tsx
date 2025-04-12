import { ContentPanel } from './componets/content_panel';
import { ControlPanel } from './componets/control_panel';
import './styles/make_screen.scss';
export function MakeScreen() {
  return (
    <div className="make-screen">
      <ControlPanel />
      <ContentPanel />
    </div>
  );
}
