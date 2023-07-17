# Caveat
This is a **work-in-progress** and experimental. It is meant more as a prototype than a real offering. It is likely to have radical reworks ... or be ignored for months. Though I am sharing this publicly I'm treating it as a personal experiment.
# Usage Notes
This requires https://github.com/tasmota/decode-config/releases in a directory ../tstools (typically a symbolic link).

# Design
Currently it uses mDNS for Shelly devices and MQTT for Tasmota. It saves information into JSON files plus .js for Shelly code. Shelly devices can also be found with MQTT. One problem with MQTT is that the topics aren't standard so are not reliable. Also some devices are available only through Home Assistant

This version does not do any restore.

# Plans
The goal is to turn this into a library so that one can use and extend the capabilities. The larger goal is a control panel for maintaining direct relationships between and points so that trying a switch to a bulb would put the appropriate control (webhook in Shelly, for example) to send the message. (In my system, status updates are largely via MQTT to a central server and considered noncritical)