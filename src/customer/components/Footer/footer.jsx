import { Button } from "@headlessui/react"
import { TypeSpecimen } from "@mui/icons-material"
import { Grid,Link, Typography } from "@mui/material"
export function Footer()
{
    return  <Grid className="bg-black text-white text-center mt-10"
    container sx={{bgcolor:"black",color:"white",py:3}} 
    >

     <Grid item xs={12} sm={6} md={3}>

        <div>
            <Typography className="pb-5" variant="h6">Company</Typography>
        </div>

        <div>
            <Button className="pb-5" variant="h6" gutterBottom>About</Button>
        </div>

        <div>
            <Button className="pb-5" variant="h6" gutterBottom>Blog</Button>
        </div>

        <div>
           <Button className="pb-5" variant="h6" gutterBottom>Jobs</Button>
        </div>

        <div>
            <Button className="pb-5" variant="h6" gutterBottom>Press</Button>
        </div>

        <div>
            <Button className="pb-5" variant="h6" gutterBottom>Partners</Button>
        </div>

     </Grid>

     <Grid item xs={12} sm={6} md={3}>

        <div>
            <Typography className="pb-5" variant="h6">Company</Typography>
        </div>

        <div>
            <Button className="pb-5" variant="h6" gutterBottom>Marketing</Button>
        </div>

        <div>
            <Button className="pb-5" variant="h6" gutterBottom>Analytics</Button>
        </div>

        <div>
           <Button className="pb-5" variant="h6" gutterBottom>Commerce</Button>
        </div>

        <div>
            <Button className="pb-5" variant="h6" gutterBottom>Insights</Button>
        </div>

        <div>
            <Button className="pb-5" variant="h6" gutterBottom>Support</Button>
        </div>

     </Grid>


     <Grid item xs={12} sm={6} md={3}>

        <div>
            <Typography className="pb-5" variant="h6">Company</Typography>
        </div>

        <div>
            <Button className="pb-5" variant="h6" gutterBottom>Guides</Button>
        </div>

        <div>
            <Button className="pb-5" variant="h6" gutterBottom>API Status</Button>
        </div>

     </Grid>

     <Grid item xs={12} sm={6} md={3}>

        <div>
          <Typography className="pb-5" variant="h6">Company</Typography>
        </div>

        <div>
            <Button className="pb-5" variant="h6" gutterBottom>Claim</Button>
        </div>

        <div>
            <Button className="pb-5" variant="h6" gutterBottom>Privacy</Button>
        </div>

        <div>
           <Button className="pb-5" variant="h6" gutterBottom>Terms</Button>
        </div>

        <div>
           <Button className="pb-5" variant="h6" gutterBottom></Button>
        </div>

        <div>
          <Button className="pb-5" variant="h6" gutterBottom></Button>
        </div>

        <div>
           <Button className="pb-5" variant="h6" gutterBottom></Button>
        </div>

     </Grid>

     <Grid item xs={12} className="pt-20">

        <Typography variant="body2" component="p" align="center">
             &copy; 2025 My Company. All rights reserved.
        </Typography>

        <Typography variant="body2" component="p" align="center">
             Made with Love by Bipul. 
        </Typography>

        <Typography variant="body2" component="p" align="center">
             Icons made by &nbsp; 
             <Link href="https://www.freepik.com" color="inherit" underline="always">
                Freepik
             </Link>
             &nbsp; from &nbsp;
             <Link href="https://www.freepik.com" color="inherit" underline="always">
                www.flaticon.com
             </Link>
        </Typography>
        
     </Grid>
     </Grid>
}