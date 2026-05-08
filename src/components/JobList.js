import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={isHorizontal ? `full-width-tabpanel-${index}` : "vertical-tabpanel"}
      aria-labelledby={
        isHorizontal ? `full-width-tab-${index}` : `vertical-tab-${index}`
      }
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return isHorizontal
    ? { id: `full-width-tab-${index}`, "aria-controls": `full-width-tabpanel-${index}` }
    : { id: `vertical-tab-${index}` };
}

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: isHorizontal ? "column" : "row",
  },
  tabs: {
    borderRight: isHorizontal ? "none" : "1px solid rgba(255,255,255,0.07)",
    borderBottom: isHorizontal ? "1px solid rgba(255,255,255,0.07)" : "none",
    minWidth: isHorizontal ? "unset" : "180px",
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Algotix AI": {
      jobTitle: "Software Engineer",
      duration: "Feb 2024 – Present",
      companyUrl: "https://www.algotix.ai/",
      desc: [
        "Implemented distributed, event-driven architectures using message queues and microservices to handle high-traffic scenarios reliably.",
        "Maintained production-grade backend services supporting large-scale customer engagement platforms.",
        "Collaborated with cross-functional teams (product, QA, DevOps) to ship new features with strong reliability guarantees and strict SLAs.",
        "Established CloudWatch monitoring and alerting systems, reducing incident response time by 40% through proactive issue detection.",
        "Managed infrastructure-as-code with Terraform, enabling reproducible, version-controlled cloud environments across staging and production.",
      ],
    },
    "Rehman Solutions": {
      jobTitle: "Full-Stack Developer",
      duration: "Sept 2022 – Feb 2024",
      companyUrl: "https://www.rahmansolutions.com/",
      desc: [
        "Led a cross-functional team of 5 engineers, introducing Agile practices that raised sprint velocity by 40% and pushed on-time delivery from 65% to 92%.",
        "Established end-to-end CI/CD pipelines synced with infrastructure, enabling single-command deployment and reducing manual errors and release delays by 95%.",
        "Optimized GCP Cloud Run functions and API layers, improving response times by 25% while cutting monthly cloud spend by 20%.",
        "Resolved deep performance bottlenecks through algorithmic optimization and code refactoring, measurably reducing p95 latency across key endpoints.",
      ],
    },
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={isHorizontal ? "horizontal" : "vertical"}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={(_, v) => setValue(v)}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab
            label={isHorizontal ? `0${i + 1}` : key}
            {...a11yProps(i)}
            key={i}
          />
        ))}
      </Tabs>

      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i} key={i}>
          <div className="joblist-job-title">
            {experienceItems[key].jobTitle}
            {" @ "}
          </div>
          <a
            className="joblist-job-company"
            href={experienceItems[key].companyUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            {key}
          </a>
          <div className="joblist-duration">{experienceItems[key].duration}</div>
          <ul className="job-description">
            {experienceItems[key].desc.map((item, j) => (
              <FadeInSection key={j} delay={`${j * 80}ms`}>
                <li>{item}</li>
              </FadeInSection>
            ))}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
