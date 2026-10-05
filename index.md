---
layout: default
title: Better Volume 隐私政策
---

# Better Volume 隐私政策

生效日期：2026 年 8 月 17 日

最近更新日期：2026 年 10 月 4 日

Better Volume（以下简称“本应用”）由其开发者（以下简称“我们”）提供。本政策说明您使用本应用时，信息如何被处理。

## 1. 我们处理的信息

本应用的声音处理功能在您的 Mac 本机运行。为提供主音量、应用独立音量、均衡音量、声道控制和播放保护，本应用会在内存中实时处理系统音频。音频不会保存成录音文件，也不会上传给我们或第三方。

为记住您的设置，本应用会在设备本地保存输出设备标识与名称、应用名称与 Bundle ID、音量、静音、声音处理选项及界面偏好。我们无法远程访问这些信息。

启用播放控制并经您授权后，本应用通过 Apple Music 或 Spotify 的本地自动化接口读取歌曲、歌手、封面、播放状态和进度，并执行您点击的播放、暂停、切歌或进度调整。歌曲信息不上传给我们，不保存为收听历史。Apple Music 封面在本机读取；Spotify 封面会从播放器提供的 Spotify 图片服务地址下载，该服务会收到下载请求及您的 IP 地址。封面仅在内存中缓存。您可以在设置中关闭播放控制，或在系统设置的“隐私与安全性 → 自动化”中撤销授权。

## 2. 系统权限

本应用仅在相关功能需要时请求以下权限：

- **系统音频录制（部分 macOS 版本显示为“屏幕与系统音频录制”）：**用于在本机处理系统音频并为固定音量的输出设备提供软件音量控制；
- **蓝牙：**仅在您点击显示已配对蓝牙设备时申请，用于读取已配对音频设备的名称、蓝牙地址和连接状态，以及执行您发起的连接或断开。不会扫描附近设备；隐藏设备的标识和名称只保存在本机，恢复显示不会改变系统配对记录。
- **用户选择的文件：**仅在您主动导入或导出配置时，读取或写入您选择的文件。

Mac App Store 版本不请求输入监控或辅助功能权限，也不安装全局键盘事件监视器。音量可以通过菜单栏控制；如果你主动设置全局快捷键，应用只会通过 macOS 注册你选择的精确组合键。

您可以随时在 macOS“系统设置”中更改权限。拒绝权限只会影响依赖该权限的功能。

## 3. 本地存储与诊断

设备配置、应用音量规则、功能开关和基础运行状态保存在应用沙盒的 UserDefaults 中。7 天体验的开始日期优先通过无弹窗方式保存在 macOS 钥匙串中，并在应用的 Application Support 目录保存本地备份。当钥匙串访问受阻时，应用使用本地记录继续计算体验期限；不会因此重新开始体验。旧版本的本地体验记录会在需要时迁移。

本应用使用 Apple MetricKit 在本机统计崩溃、卡顿和恢复次数，用于在诊断页面显示运行状态。应用不会自动把诊断内容发送给我们。只有当您主动复制并发送诊断信息时，接收方才会获得您选择分享的内容。

## 4. 购买与 App Store

订阅和永久解锁由 Apple 的 StoreKit 与 App Store 处理。本应用会读取 Apple 返回的商品信息和购买权益，以显示价格并解锁功能。我们不会接触或保存您的 Apple ID、银行卡或其他付款信息。

当您主动使用“获取激活码”兑换已有商店购买权益时，本应用会将 Apple 签名的购买凭证通过 HTTPS 发送至我们的授权服务 `license.vastlightyear.com`。服务端向 Apple 核验购买状态，并保存原始交易标识、授权类型、加密激活码及其哈希；领取时还会发送由硬件标识经过产品专用哈希生成的机器标识，并占用一个永久绑定名额。官网版使用相同标识，同机不重复占位；最多绑定三台，不支持停用或换绑。服务端保存机器标识与激活关联；旧版随机安装标识在升级验证时关联至机器标识。不发送原始硬件 UUID 或序列号。我们不要求提供 Apple Account 密码，不会因兑换而创建新订单或发送购买邮件。沙盒与正式交易分开处理。

兑换和激活服务由 DigitalOcean 托管，通过 Cloudflare 提供网络交付与安全防护；这些服务可能处理请求 IP 地址、时间和错误信息。购买核验所需的交易标识会发送给 Apple。信息仅用于提供授权、支持和必要安全检查，不用于广告追踪。有效授权及必要激活关联在授权有效期间保留；终止后不再需要的信息在 90 天内清理，法律义务或未结争议所需记录除外。您可通过下方联系方式申请查询或删除服务端授权数据；删除可能影响后续激活。

Apple 对相关信息的处理受其隐私政策约束：[Apple 隐私政策](https://www.apple.com/legal/privacy/)。

## 5. 网络与第三方服务

本应用会连接 Apple 服务以加载内购商品、验证购买权益和检查 App Store 版本更新。本应用不包含广告 SDK、第三方分析 SDK、Firebase 或第三方崩溃统计服务。

我们不出售或出租您的个人信息。除上述授权服务所需处理或法律要求外，不向第三方提供个人信息；不上传或共享音频内容、设备配置或应用音量规则。

## 6. 配置导入与导出

当您使用配置导出功能时，配置文件会保存到您选择的位置。文件包含声音设置和设备配置，不包含音频内容。该文件的保存、分享与删除由您自行管理。

## 7. 信息删除

您可以在应用中修改或移除相应设置。仅删除应用程序通常不会同时清除沙盒设置、Application Support 目录或钥匙串中的记录。体验开始日期可能在重新安装后继续保留。若您希望删除这些本地记录，可以清理本应用的沙盒数据（包括 Application Support 中的 `com.shulinlou.soundcontrolformac/Trial/start-date.json`），并在“钥匙串访问”中删除服务名为 `com.shulinlou.soundcontrolformac.pro-trial` 的项目。我们无法远程访问或删除这些记录。

您主动导出的配置文件需要在对应保存位置单独删除。

## 8. 未成年人

本应用不以儿童为目标用户，也不会主动收集未成年人的个人信息。未成年人应在监护人同意和指导下使用本应用。

## 9. 政策更新

我们可能因功能、法律法规或审核要求更新本政策。更新后的版本会发布在本页面；如法律要求，我们会在处理信息前取得相应同意。

## 10. 联系我们

如您对本政策有任何问题、意见或请求，请联系：

[onebooksoftware@outlook.com](mailto:onebooksoftware@outlook.com)

---

# Better Volume Privacy Policy

**Effective date:** August 17, 2026  
**Last updated:** October 4, 2026

Better Volume (the “App”) is provided by its developer (“we”, “us”). This policy explains how information is handled when you use the App.

## 1. Information we process

The App processes sound locally on your Mac. To provide master volume, per-app volume, volume leveling, channel controls, and playback protection, the App processes system audio in memory in real time. Audio is not saved as a recording or uploaded to us or any third party.

To remember your preferences, the App stores output-device identifiers and names, application names and bundle identifiers, volume and mute settings, audio-processing options, and interface preferences locally on your device. We cannot access this information remotely.

With your permission, playback controls use the local automation interfaces of Apple Music or Spotify to read track information, artwork, playback state, and position, and carry out your playback actions. Track information is not uploaded to us or stored as listening history. Apple Music artwork is read locally. Spotify artwork is downloaded from the Spotify image service URL supplied by the player; that service receives the request and your IP address. Artwork is cached only in memory. You can disable playback controls in Settings or revoke permission under Privacy & Security → Automation in System Settings.

## 2. System permissions

The App requests system permissions only when required for the relevant feature:

- **System Audio Recording (shown as “Screen & System Audio Recording” on some macOS versions):** processes system audio locally and provides software volume control for fixed-volume output devices;
- **Bluetooth:** requested only when you choose to show paired Bluetooth devices. The App reads paired audio-device names, Bluetooth addresses, and connection states, and performs connections or disconnections you request. It does not scan nearby devices. Hidden-device identifiers and names are stored only locally; restoring visibility does not change system pairing records.
- **User-selected files:** reads or writes only the file you choose when importing or exporting a configuration.

The Mac App Store build does not request Input Monitoring or Accessibility access and does not install a global keyboard-event monitor. Volume can be controlled from the menu bar. If you configure global shortcuts, the App uses macOS to register only the exact combinations you select.

You can change these permissions at any time in macOS System Settings. Declining a permission only affects features that depend on it.

## 3. Local storage and diagnostics

Device profiles, per-app volume rules, feature preferences, and basic health counters are stored in the App sandbox using UserDefaults. The start date of the seven-day trial is stored in the macOS Keychain without requesting an access prompt, with a local backup in the App’s Application Support directory. If Keychain access is unavailable, the App uses the local record to preserve the trial period rather than restarting it. Local trial records from earlier versions are migrated when needed.

The App uses Apple MetricKit locally to count crashes, hangs, and recovery events for the diagnostics screen. Diagnostic information is not sent to us automatically. A recipient receives diagnostic information only if you choose to copy and share it.

## 4. Purchases and the App Store

Subscriptions and lifetime purchases are processed by Apple through StoreKit and the App Store. The App reads product information and purchase entitlements returned by Apple to display prices and unlock features. We do not receive or store your Apple ID, card details, or other payment information.

When you explicitly choose “Get Activation Code” to redeem an existing store purchase, the App sends the Apple-signed purchase transaction over HTTPS to our licensing service at `license.vastlightyear.com`. The server checks the purchase status with Apple and stores the original transaction identifier, license plan, encrypted activation code and its hash. Claiming also sends a product-scoped hash-derived machine identifier and reserves one permanent device slot. The website edition uses the same identifier, so the same machine does not consume another slot. Up to three machines may be bound, with no deactivation or transfers. The server stores the machine identifier and activation associations; legacy random installation IDs are associated with a machine on verification after upgrading. Raw hardware UUIDs and serial numbers are not transmitted. We do not request your Apple Account password, create a new order or send a purchase email for this redemption. Sandbox and production transactions are handled separately.

The licensing service is hosted by DigitalOcean, with network delivery and security provided by Cloudflare; these providers may process request IP addresses, timestamps and errors. Transaction identifiers needed for purchase verification are sent to Apple. This information is used only for licensing, support and necessary security checks, not advertising tracking. Valid licenses and necessary activation records are kept for the license term; data no longer needed is removed within 90 days after termination, except where legal obligations or unresolved disputes require retention. You can contact us below to request access to or deletion of server-side licensing data; deletion may affect future activation.

Apple processes related information under the [Apple Privacy Policy](https://www.apple.com/legal/privacy/).

## 5. Network access and third-party services

The App connects to Apple services to load in-app purchase products, verify purchase entitlements, and check the latest App Store version. The App contains no advertising SDK, third-party analytics SDK, Firebase, or third-party crash-reporting service.

We do not sell or rent personal information. Disclosure is limited to the licensing services described above or legal requirements; audio content, device profiles and per-app volume rules are not uploaded or shared.

## 6. Configuration import and export

When you export a configuration, the file is saved to the location you choose. It contains audio preferences and device profiles, but no audio content. You control where the file is stored, how it is shared, and when it is deleted.

## 7. Deletion

You can change or remove settings in the App. Deleting the application alone does not normally remove sandbox settings, Application Support data, or Keychain records. The trial start date may therefore remain after reinstalling. To delete these local records, remove the App’s sandbox data, including `com.shulinlou.soundcontrolformac/Trial/start-date.json` in Application Support, and remove the Keychain item whose service name is `com.shulinlou.soundcontrolformac.pro-trial` using Keychain Access. We cannot access or delete these records remotely.

Configuration files that you exported must be deleted separately from the location where you saved them.

## 8. Children

The App is not directed to children and does not intentionally collect personal information from children. Minors should use the App with the consent and guidance of a guardian.

## 9. Changes to this policy

We may update this policy for product, legal, or App Review reasons. Updates will be posted on this page. Where required by law, we will obtain appropriate consent before processing information.

## 10. Contact

For questions, comments, or requests about this policy, contact:

[onebooksoftware@outlook.com](mailto:onebooksoftware@outlook.com)
