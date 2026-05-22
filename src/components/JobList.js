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
      jobTitle: "Senior Software Engineer",
      duration: "Feb 2024 – Present",
      companyUrl: "https://www.algotix.ai/",
      desc: [
        "Architected asynchronous processing pipelines using BullMQ and AWS SQS, enabling the platform to handle high-concurrency workloads reliably with automatic retry logic, dead-letter queues, and horizontal worker scaling.",
        "Led infrastructure modernization initiative: migrated key services to containerized ECS deployments with Terraform-managed IaC, achieving reproducible environment provisioning across staging and production and eliminating configuration drift.",
        "Own end-to-end design and delivery of distributed, event-driven microservice systems on AWS from initial architecture through production deployment, monitoring, and incident response.",
        "Established full observability stack CloudWatch custom metrics, distributed tracing, structured logging, and automated alerting reducing mean time to detection (MTTD) of production incidents by 40%.",
        "Drive technical decisions in cross-functional Agile sprints: conduct architectural reviews, lead code reviews for the team, define API contracts, and enforce SLA compliance across critical services.",
        "Introduced API contract testing and integration test coverage, reducing production regression bugs by 30% across quarterly releases.",
      ],
    },
    "Rehman Solutions": {
      jobTitle: "Full-Stack Software Engineer",
      duration: "Sep 2022 – Feb 2024",
      companyUrl: "https://www.rahmansolutions.com/",
      desc: [
        "Delivered full-stack features across client-facing products using React.js, Node.js, and NestJS; collaborated in a 5-person engineering team and contributed to architecture and technical direction.",
        "Proactively learned and applied CI/CD practices contributed to pipeline improvements using GitHub Actions that reduced manual deployment steps and release friction for the team.",
        "Identified and fixed several API performance issues through query optimization and code refactoring improvements were noticed by senior engineers and led to more responsibility over time.",
        "Optimized GCP Cloud Run services through query optimization, Redis caching, and service right-sizing for faster responses.",
        "Collaborated closely with senior engineers and absorbed best practices in code structure, Git workflows, and REST API design applying learnings to every feature built.",
        "Established code quality standards linting, pre-commit hooks, unit test coverage thresholds and contributed to internal onboarding documentation adopted across the team.",
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
