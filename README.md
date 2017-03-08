# spunk_app_sec_orchestration
Cyber Security Orchestration app for Splunk is an "splunk app" for collecting reports as logs from various cyber security tools like Suricata, Cucko Sandbox, Noriben Sandbox, Volatiity, Rekall, Thug, Captipper, Honeypots and various tools/custom scripts from SIFT and REMNux. 

This app can be used by DFIR and REM teams who analyses various malicious crime files/ artifacts and can use this app to search, report and share the findings with other teams (like SOC). As a repository for all files analysed which can be searched upon using powerful splunk commands. 

An Analysis engine (like SIFT/REmnux) is currently used as inputs for this app. Refer design documents for the overall architecture. 

Currently the App layout is organised as Web, Network and Endpoint domains. 
Security Tools
  * Threat Intell (Custom Scripts to pull OSINT)
  * HoneyPot (Overview , Dionaea , Snort and pOF dashboards using HP Feeds)
  * Suricata Feeds (Real time and/or PCAP parser into Alerts, HTTP, Files, DNS, SSH and SSL
  * Dashboard to view the CRIME files as per the tags and eventtypes. 
  * Thug Domain Analysis Feeds
  * Captipper to parse the PCAP files
  * Cuckoo (Modified version)
  * Noriben Sandbok 
  * Phihsing Emails (Custom Scripts)
  * Dashboards to analyse Windows server/ workstation / Domain Controller Windows events
  * Dashboards to analyse generic linux syslog events
  * Rue repository (Snort and Yara Rules)
  * JIRA dashboards to view the tickets as workflow engine.
  
The app is in early versions of its development cycle. Below are the ongoing tO_DO tasks

  * More custom workflows to link various reports
  * CIM Compatible
  * Using DataModels
  * Formalise the Analytics Engine. 
