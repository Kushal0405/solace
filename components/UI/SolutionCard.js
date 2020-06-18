import { Grid } from '@material-ui/core'

const SolutionCard = ({ image, title, details, link }) => {
  return (
    <div className="solution-card">
      <Grid container spacing={3} justify="center">
        <Grid item lg={2}>
          <img src={image} alt="" className="solution-image" />
        </Grid>
        <Grid item lg={10}>
          <p className="solution-title">{title}</p>
          <p className="solution-details">{details}</p>
          <p className="solution-details solution-link">{link}</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default SolutionCard