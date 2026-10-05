---
layout: default
title: Better Volume Support
---

<style>
.support-language { display: none; }
.support-language[lang="en"] { display: block; }
html[data-support-language="zh"] .support-language[lang="en"] { display: none; }
html[data-support-language="zh"] .support-language[lang="zh-Hans"] { display: block; }
.support-language-picker { margin-bottom: 1.5rem; }
</style>
<script>
(function () {
  var preferred = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  var language = /^zh(?:-|$)/i.test(preferred) ? 'zh' : 'en';
  window.setSupportLanguage = function (value) {
    language = value === 'zh' ? 'zh' : 'en';
    document.documentElement.dataset.supportLanguage = language;
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : 'en';
    document.title = language === 'zh' ? 'Better Volume 技术支持 | Better Volume' : 'Better Volume Support | Better Volume';
    var picker = document.getElementById('support-language');
    if (picker) picker.value = language;
  };
  window.setSupportLanguage(language);
  document.addEventListener('DOMContentLoaded', function () {
    window.setSupportLanguage(language);
    document.getElementById('support-language').addEventListener('change', function () {
      window.setSupportLanguage(this.value);
    });
  });
})();
</script>

<div class="support-language-picker">
<label for="support-language">Language / 语言</label>
<select id="support-language">
<option value="en">English</option>
<option value="zh">简体中文</option>
</select>
</div>

<div class="support-language" lang="en" markdown="1">

# Better Volume Support

If Better Volume cannot control the volume of an external display:

1. Allow Better Volume to use System Audio Recording in macOS System Settings;
2. Confirm that the correct output device is selected in the menu bar;
3. Test control with the master-volume slider or mute button in the menu bar.

## Playback controls

Playback controls currently support Apple Music and Spotify, not NetEase Cloud Music or browsers. Open the player, then select **Connect** for it under **Settings → General → Playback Controls** and allow automation. An actively playing player takes precedence over paused players; when several players are playing, the current selection remains stable. The card is hidden when no track can be read. Controls and artwork depend on the player. If permission was denied, allow access under **System Settings → Privacy & Security → Automation**.

## Bluetooth and devices

Pair the device in System Settings first. Then choose to show paired Bluetooth devices in Better Volume's output list and grant access when prompted. If a connected device is silent, check that its audio output is ready and that it is not connected to another device. For connection failures or denied access, open System Settings from **Settings → Devices**.

Hiding a device does not unpair it. Restore it in **Settings → Devices → Hidden Devices**. The current output device cannot be hidden.

If the issue continues, copy the diagnostic information from **Settings** and email it to:

[onebooksoftware@outlook.com](mailto:onebooksoftware@outlook.com)

Diagnostics are never uploaded automatically. We receive them only when you choose to send them.

[Privacy Policy](./)

</div>

<div class="support-language" lang="zh-Hans" markdown="1">

# Better Volume 技术支持

如果 Better Volume 无法控制外接显示器音量，请先检查：

1. 在 macOS“系统设置”中允许 Better Volume 使用系统音频录制权限；
2. 在菜单栏中确认选择了正确的输出设备；
3. 使用菜单栏中的主音量滑块或静音按钮测试控制。

## 播放控制

播放控制目前支持 Apple Music 和 Spotify，暂不支持网易云音乐或浏览器。先打开播放器，再到“设置 → 常规 → 播放控制”点击对应播放器的“连接”，并允许自动化控制。多个播放器同时打开时优先显示正在播放的播放器；多个播放器同时播放时保持当前选择。没有可读取的曲目时不显示卡片。切歌、进度和封面取决于播放器提供的信息。授权被拒绝后，可在系统设置的“隐私与安全性 → 自动化”中允许控制。

## 蓝牙与设备管理

先在系统蓝牙设置中完成配对，再在 Better Volume 的设备列表中选择显示已配对的蓝牙设备，并按提示授权。若设备已连接但没有声音，请确认音频输出已就绪且没有连接到其他设备。连接失败或授权被拒时，可在“设置 → 设备”进入系统设置检查。

隐藏设备不会取消蓝牙配对。可在“设置 → 设备 → 已隐藏的设备”中恢复显示；正在使用的设备不能隐藏。

如问题仍未解决，请在应用的设置中复制诊断信息，并发送至：

[onebooksoftware@outlook.com](mailto:onebooksoftware@outlook.com)

诊断信息不会自动上传，只有在您主动发送时我们才会收到。

[查看隐私政策](./)

</div>
