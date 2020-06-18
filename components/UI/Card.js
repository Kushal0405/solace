import { Grid } from '@material-ui/core'

const Card = ({ children, title, details }) => {
  return (
    <div className="card-simple">
      <p className="card-title">{title}</p>
      {children}
      <Grid container>
        {
          details && details.map((detail) => {
            <Grid item xs={4}>
              {detail.summary}
              <h1>{detail.summary}</h1>
              {console.log(detail.summary)}
            </Grid>
          })
        }
      </Grid>
    </div>
  )
}

export default Card
