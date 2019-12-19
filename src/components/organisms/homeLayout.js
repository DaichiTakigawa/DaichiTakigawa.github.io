
import React from 'react'
import {Grid, Responsive} from 'semantic-ui-react'
import {rhythm} from '../../utils/typography'

import HomeContent from '../molecules/homeContent'

export default () => (
    <Grid stackable>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column width={13} style={{backgroundColor: "#EEEEEE"}}>
        <HomeContent>
        </HomeContent>
      </Grid.Column>
    </Grid>
)
