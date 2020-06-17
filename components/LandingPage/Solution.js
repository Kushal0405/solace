import SolutionCard from './SolutionCard/SolutionCard'
import { Grid } from '@material-ui/core'

const Solution = () => {
  return (
    <div className="solution">
      <Grid container spacing={3} justify="center" >
        <Grid item md={6}>
          <SolutionCard />
        </Grid>
        <Grid item md={6}>
          <SolutionCard />
        </Grid>
        <Grid item md={6}>
          <SolutionCard />
        </Grid>
        <Grid item md={6}>
          <SolutionCard />
        </Grid>
      </Grid>
    </div>
  )
}

export default Solution
