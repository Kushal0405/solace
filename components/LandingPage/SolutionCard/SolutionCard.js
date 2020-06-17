import { Grid } from '@material-ui/core'

const SolutionCard = ({ image }) => {
  return (
    <div className="solution-card">
      <Grid container spacing={3} alignContent="center">
        <Grid item md={3}>
          <img src={image} alt="" />
        </Grid>
        <Grid item md={8}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit provident quidem itaque deleniti minus accusamus magnam, necessitatibus facilis hic. Commodi.
        </Grid>
      </Grid>
    </div>
  )
}

export default SolutionCard