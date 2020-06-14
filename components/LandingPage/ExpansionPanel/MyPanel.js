import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MyPanel = ({ summary, details, panelName, expanded, onChange }) => {

  return (
    <ExpansionPanel square={true} expanded={expanded === panelName} onChange={onChange(panelName)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id={panelName}
      >
        <p className="summary">{summary}</p>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <p className="details">
          {details}
        </p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default MyPanel
