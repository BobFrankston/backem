// Generated by https://quicktype.io

export interface TasmotaFullStatus {
    adc_param1:                         number;
    adc_param2:                         number;
    adc_param3:                         number;
    adc_param4:                         number;
    adc_param_type:                     number;
    altitude:                           number;
    as3935_functions:                   As3935Functions;
    as3935_parameter:                   As3935Parameter;
    as3935_sensor_cfg:                  number[];
    baudrate:                           number;
    blinkcount:                         number;
    blinktime:                          number;
    bootcount:                          number;
    bootcount_reset_time:               number;
    bri_power_on:                       number;
    bri_preset_high:                    number;
    bri_preset_low:                     number;
    button_debounce:                    number;
    button_text:                        string[];
    button_topic:                       string;
    cfg_crc:                            string;
    cfg_crc32:                          string;
    cfg_holder:                         number;
    cfg_size:                           number;
    cfg_timestamp:                      number;
    config_version:                     number;
    cors_domain:                        string;
    deepsleep:                          number;
    device_group_share_in:              number;
    device_group_share_out:             number;
    device_group_tie:                   number[];
    device_group_topic:                 string[];
    devicename:                         string;
    dimmer_hw_max:                      number;
    dimmer_hw_min:                      number;
    dimmer_step:                        number;
    display_address:                    number[];
    display_cols:                       number[];
    display_dimmer_protected:           number;
    display_font:                       number;
    display_height:                     number;
    display_mode:                       number;
    display_model:                      number;
    display_options:                    DisplayOptions;
    display_refresh:                    number;
    display_rotate:                     number;
    display_rows:                       number;
    display_size:                       number;
    display_width:                      number;
    displays:                           string;
    domoticz_key_idx:                   number[];
    domoticz_relay_idx:                 number[];
    domoticz_sensor_idx:                number[];
    domoticz_switch_idx:                number[];
    domoticz_update_timer:              number;
    energy_current_calibration:         number;
    energy_frequency_calibration:       number;
    energy_kWhdoy:                      number;
    energy_kWhtoday:                    number;
    energy_kWhtoday_ph:                 number[];
    energy_kWhtotal:                    number;
    energy_kWhtotal_ph:                 number[];
    energy_kWhtotal_time:               number;
    energy_kWhyesterday:                number;
    energy_kWhyesterday_ph:             number[];
    energy_max_current:                 number;
    energy_max_energy:                  number;
    energy_max_energy_start:            number;
    energy_max_power:                   number;
    energy_max_power_limit:             number;
    energy_max_power_limit_hold:        number;
    energy_max_power_limit_window:      number;
    energy_max_power_safe_limit:        number;
    energy_max_power_safe_limit_hold:   number;
    energy_max_power_safe_limit_window: number;
    energy_max_voltage:                 number;
    energy_min_current:                 number;
    energy_min_power:                   number;
    energy_min_voltage:                 number;
    energy_power_calibration:           number;
    energy_power_delta:                 number[];
    energy_usage:                       EnergyUsage;
    energy_voltage_calibration:         number;
    fallback_module:                    number;
    flag:                               { [key: string]: number };
    flag2:                              { [key: string]: number };
    flag3:                              { [key: string]: number };
    flag4:                              { [key: string]: number };
    flag5:                              { [key: string]: number };
    friendlyname:                       string[];
    gpio16_converted:                   number;
    hass_new_discovery:                 number;
    header:                             Header;
    hostname:                           string;
    hotplug_scan:                       number;
    hum_comp:                           number;
    i2c_drivers:                        string[];
    ina219_mode:                        number;
    ina226_i_fs:                        number[];
    ina226_r_shunt:                     number[];
    influxdb_bucket:                    string;
    influxdb_host:                      string;
    influxdb_org:                       string;
    influxdb_period:                    number;
    influxdb_port:                      number;
    influxdb_token:                     string;
    influxdb_version:                   number;
    interlock:                          string[];
    ip_address:                         string[];
    ipv4_rgx_address:                   string;
    ipv4_rgx_subnetmask:                string;
    keeloq_count:                       number;
    keeloq_master_lsb:                  number;
    keeloq_master_msb:                  number;
    keeloq_serial:                      number;
    knx_CB_addr:                        number[];
    knx_CB_param:                       number[];
    knx_CB_registered:                  number;
    knx_GA_addr:                        number[];
    knx_GA_param:                       number[];
    knx_GA_registered:                  number;
    knx_physsical_addr:                 number;
    last_module:                        number;
    latitude:                           number;
    ledmask:                            string;
    ledpwm_mask:                        number;
    ledpwm_off:                         number;
    ledpwm_on:                          number;
    ledstate:                           number;
    light_color:                        number[];
    light_correction:                   number;
    light_dimmer:                       number;
    light_fade:                         number;
    light_pixels:                       number;
    light_rotation:                     number;
    light_scheme:                       number;
    light_speed:                        number;
    light_step_pixels:                  number;
    light_wakeup:                       number;
    light_width:                        number;
    longitude:                          number;
    mbflag2:                            Mbflag2;
    mcp230xx_config:                    Mcp230XxConfig[];
    mcp230xx_int_prio:                  number;
    mcp230xx_int_timer:                 number;
    mems:                               string[];
    module:                             number;
    monitors:                           string;
    mqtt_client:                        string;
    mqtt_fingerprint1:                  MqttFingerprint1[];
    mqtt_fingerprint2:                  string[];
    mqtt_fulltopic:                     string;
    mqtt_grptopic:                      string;
    mqtt_grptopic2:                     string[];
    mqtt_host:                          string;
    mqtt_keepalive:                     number;
    mqtt_port:                          number;
    mqtt_prefix:                        string[];
    mqtt_pwd:                           string;
    mqtt_retry:                         number;
    mqtt_socket_timeout:                number;
    mqtt_topic:                         string;
    mqtt_user:                          string;
    mqtt_wifi_timeout:                  number;
    mqttlog_level:                      number;
    my_gp:                              number[];
    novasds_startingoffset:             number;
    ntp_server:                         string[];
    ot_boiler_setpoint:                 number;
    ot_flags:                           number;
    ot_hot_water_setpoint:              number;
    ota_url:                            string;
    param:                              number[];
    pcf8574_config:                     number[];
    pms_wake_interval:                  number;
    power:                              Power;
    poweronstate:                       number;
    pulse_counter:                      number[];
    pulse_counter_debounce:             number;
    pulse_counter_debounce_high:        number;
    pulse_counter_debounce_low:         number;
    pulse_counter_type:                 PulseCounterType;
    pulse_timer:                        number[];
    pwm_dimmer_cfg:                     PwmDimmerCFG;
    pwm_frequency:                      number;
    pwm_range:                          number;
    pwm_value:                          number[];
    rf_code:                            Array<MqttFingerprint1[]>;
    rf_protocol_mask:                   string;
    rgbwwTable:                         number[];
    rgx_pwassword:                      string;
    rgx_ssid:                           string;
    rule_enabled:                       Rule;
    rule_once:                          Rule;
    rule_stop:                          Rule;
    rules:                              string[];
    save_data:                          number;
    save_flag:                          number;
    sbaudrate:                          number;
    sbflag1:                            Sbflag1;
    script_pram:                        Array<number[]>;
    SensorBits1:                        SensorBits1;
    sensors:                            Array<string[]>;
    serial_config:                      number;
    serial_delimiter:                   number;
    seriallog_level:                    number;
    shd_leading_edge:                   number;
    shd_warmup_brightness:              number;
    shd_warmup_time:                    number;
    shelly_dimmer:                      string;
    shift595_device_count:              number;
    shutter_accuracy:                   number;
    shutter_button:                     ShutterButton[];
    shutter_closetime:                  number[];
    shutter_mode:                       number;
    shutter_motordelay:                 number[];
    shutter_opentime:                   number[];
    shutter_options:                    number[];
    shutter_position:                   number[];
    shutter_pwmrange:                   Array<number[]>;
    shutter_set50percent:               number[];
    shutter_startrelay:                 number[];
    shutter_tilt_config:                Array<number[]>;
    shutter_tilt_pos:                   number[];
    shuttercoeff:                       Array<number[]>;
    sleep:                              number;
    sps30_inuse_hours:                  number;
    sta_active:                         number;
    sta_config:                         number;
    sta_pwd:                            string[];
    sta_ssid:                           string[];
    state_text:                         string[];
    switch_debounce:                    number;
    switch_topic:                       string;
    switchmode:                         number[];
    switchtext:                         string[];
    syslog_host:                        string;
    syslog_level:                       number;
    syslog_port:                        number;
    tariff:                             Array<number[]>;
    tcp_baudrate:                       number;
    tcp_config:                         number;
    tele_period:                        number;
    telegram_chatid:                    string;
    telegram_token:                     string;
    teleinfo:                           Teleinfo;
    temp_comp:                          number;
    templatename:                       string;
    tflag:                              Tflag[];
    timer:                              Timer[];
    timezone:                           number;
    timezone_minutes:                   number;
    toffset:                            number[];
    tuya_fnid_map:                      TuyaFnidMap[];
    tuyamcu_topic:                      number;
    user_template:                      UserTemplate;
    version:                            string;
    web_color:                          string[];
    web_color2:                         string[];
    web_password:                       string;
    web_refresh:                        number;
    weblog_level:                       number;
    webserver:                          number;
    weight_calibration:                 number;
    weight_change:                      number;
    weight_item:                        number;
    weight_max:                         number;
    weight_reference:                   number;
    wifi_bssid:                         number[];
    wifi_channel:                       number;
    wifi_output_power:                  number;
    windmeter_pulse_debounce:           number;
    windmeter_pulses_x_rot:             number;
    windmeter_radius:                   number;
    windmeter_speed_factor:             number;
    windmeter_tele_pchange:             number;
    ws_color:                           Array<number[]>;
    ws_width:                           number[];
    zb_channel:                         number;
    zb_ext_panid:                       string;
    zb_pan_id:                          string;
    zb_precfgkey_h:                     string;
    zb_precfgkey_l:                     string;
    zb_txradio_dbm:                     number;
}

export interface SensorBits1 {
    bh1750_1_resolution:      number;
    bh1750_2_resolution:      number;
    hx711_json_weight_change: number;
    mhz19b_abc_disable:       number;
}

export interface As3935Functions {
    dist_autotune:         number;
    mqtt_only_Light_Event: number;
    nf_autotune:           number;
    nf_autotune_both:      number;
}

export interface As3935Parameter {
    dist_autotune_time: number;
    nf_autotune_min:    number;
    nf_autotune_time:   number;
}

export interface DisplayOptions {
    invert: number;
    type:   number;
}

export interface EnergyUsage {
    last_return_kWhtotal: number;
    last_usage_kWhtotal:  number;
    return1_kWhtotal:     number;
    return2_kWhtotal:     number;
    usage1_kWhtoday:      number;
    usage1_kWhtotal:      number;
}

export interface Header {
    data:      Data;
    env:       Env;
    template:  Data;
    timestamp: string;
}

export interface Data {
    crc:       string;
    crc32:     string;
    hardware?: string;
    size:      number;
    version:   Version;
}

export interface Version {
    id:   string;
    name: string;
}

export interface Env {
    platform: string;
    python:   string;
    script:   string;
    system:   string;
}

export interface Mbflag2 {
    temperature_set_res: number;
}

export interface Mcp230XxConfig {
    int_count_en:     number;
    int_report_defer: number;
    int_report_mode:  number;
    int_retain_flag:  number;
    keep_output:      number;
    pinmode:          number;
    pullup:           number;
    saved_state:      number;
}

export enum MqttFingerprint1 {
    The0X00 = "0x00",
    The0X01 = "0x01",
    The0X03 = "0x03",
    The0X0E = "0x0e",
    The0X16 = "0x16",
    The0X1A = "0x1a",
    The0X21 = "0x21",
    The0X2E = "0x2e",
    The0X48 = "0x48",
}

export interface Power {
    power1: number;
    power2: number;
    power3: number;
    power4: number;
    power5: number;
    power6: number;
    power7: number;
    power8: number;
}

export interface PulseCounterType {
    pulse_counter_type1: number;
    pulse_counter_type2: number;
    pulse_counter_type3: number;
    pulse_counter_type4: number;
}

export interface PwmDimmerCFG {
    pwm_count: number;
}

export interface Rule {
    rule1: number;
    rule2: number;
    rule3: number;
}

export interface Sbflag1 {
    influxdb_default:     number;
    influxdb_state:       number;
    range_extender:       number;
    range_extender_napt:  number;
    sonoff_l1_music_sync: number;
    telegram_echo_enable: number;
    telegram_recv_enable: number;
    telegram_send_enable: number;
}

export interface ShutterButton {
    enabled:               number;
    mqtt_broadcast_all:    number;
    mqtt_broadcast_double: number;
    mqtt_broadcast_hold:   number;
    mqtt_broadcast_single: number;
    mqtt_broadcast_triple: number;
    press_double:          string;
    press_hold:            string;
    press_single:          string;
    press_triple:          string;
    shutter:               number;
}

export interface Teleinfo {
    mode_standard:      number;
    raw_limit:          number;
    raw_report_changed: number;
    raw_send:           number;
    raw_skip:           number;
}

export interface Tflag {
    dow:   number;
    hemis: number;
    hour:  number;
    month: number;
    week:  number;
}

export interface Timer {
    arm:    number;
    days:   Days;
    device: number;
    mode:   number;
    power:  number;
    repeat: number;
    time:   Time;
    window: number;
}

export enum Days {
    The0B0000000 = "0b0000000",
}

export enum Time {
    The0X000 = "0x000",
}

export interface TuyaFnidMap {
    dpid: number;
    fnid: number;
}

export interface UserTemplate {
    base: number;
    flag: number;
    gpio: number[];
    name: string;
}

// Generated by https://quicktype.io
// Just http status request

export interface TasmotaStatusSimple {
    Status: StatusSimple;
}

interface StatusSimple {
    Module: number;
    DeviceName: string;
    FriendlyName: string[];
    Topic: string;
    ButtonTopic: string;
    Power: number;
    PowerOnState: number;
    LedState: number;
    LedMask: string;
    SaveData: number;
    SaveState: number;
    SwitchTopic: string;
    SwitchMode: number[];
    ButtonRetain: number;
    SwitchRetain: number;
    SensorRetain: number;
    PowerRetain: number;
    InfoRetain: number;
    StateRetain: number;
}
interface TasmotaSettings {
    Name: string;
    TimeZone: string;
    // Add other settings properties here
}

// Generated by https://quicktype.io

export interface Tasmotadiscovery {
    ip: string;
    dn: string;
    fn: Array<null | string>;
    hn: string;
    mac: string;
    md: string;
    ty: number;
    if: number;
    ofln: string;
    onln: string;
    state: string[];
    sw: string;
    t: string;
    ft: string;
    tp: string[];
    rl: number[];
    swc: number[];
    swn: null[];
    btn: number[];
    so: { [key: string]: number };
    lk: number;
    lt_st: number;
    sho: number[];
    ver: number;
}