export const policies = {
  privacy: {
    title: { zh: '隐私政策', en: 'Privacy policy' },
    intro: { zh: '本说明适用于当前演示网站的实际数据边界。', en: 'This notice describes the actual data boundaries of this demo website.' },
    sections: [
      { title: { zh: '表单不发送也不保存', en: 'Forms do not send or store data' }, body: { zh: '联系表单只在浏览器内进行校验，不发送邮件、不写入服务器，也不保存到 Cookie 或本地存储。刷新页面后填写内容清空。', en: 'The contact form validates within your browser. It sends no email, writes no server data and does not store entries in cookies or local storage. Entries clear when the page refreshes.' } },
      { title: { zh: '素材与基础访问', en: 'Media and basic access' }, body: { zh: '字体、图片和视频由本站托管。独立模板不嵌入第三方统计或广告。运行网站的基础设施可能按其运营配置记录必要的访问日志；宿主平台的隐私政策另行适用。', en: 'Fonts, images and video are hosted by this site. The standalone template embeds no third-party analytics or advertising. Hosting infrastructure may record necessary access logs according to its configuration; the host platform’s privacy policy also applies.' } },
      { title: { zh: '演示状态与后续修改', en: 'Demo state and future changes' }, body: { zh: '菜单、筛选、FAQ 和视频控制状态只存在于当前页面运行期间。如果后续接入真实服务，运营方应在收集数据前更新政策、告知用途并配置必要保护。', en: 'Menu, filter, FAQ and video controls keep state only while the page runs. If real services are added, the operator should update this notice before collecting data, explain purposes and configure appropriate safeguards.' } },
    ],
  },
  terms: {
    title: { zh: '使用条款', en: 'Terms of use' },
    intro: { zh: '这是宠物照顾主题的网站演示。请了解以下使用边界。', en: 'This is a pet care website demonstration. Please understand the following boundaries.' },
    sections: [
      { title: { zh: '没有交易或预约', en: 'No transactions or bookings' }, body: { zh: '产品、价格、服务流程与展示数据用于演示，不构成商品要约、医疗服务承诺或真实顾客背书。表单校验通过不代表提交、送达或预约成功。', en: 'Products, prices, service flows and display figures are illustrative. They are not offers, medical service commitments or endorsements from real customers. Passing form validation does not mean submission, delivery or a successful booking.' } },
      { title: { zh: '健康内容边界', en: 'Health information boundaries' }, body: { zh: '健康与洗护内容仅供一般教育参考，不能替代合格兽医的个体化建议、诊断或治疗。如有紧急情况，请联系当地兽医急诊。', en: 'Health and grooming content is for general education and does not replace personalized advice, diagnosis or treatment from a qualified veterinarian. For emergencies, contact a local emergency veterinary service.' } },
      { title: { zh: '设计与素材权利', en: 'Design and media rights' }, body: { zh: '原参考设计、猫咪视频及头像的权利归其权利人；本演示不构成商业素材授权。原创内页文案和示意图与参考组件明确区分。商业使用前需核实所有素材许可。', en: 'The reference design, cat video and avatars belong to their respective rights holders. This demo does not grant commercial media rights. Original page copy and illustrations are distinct from the reference component. Verify all media licenses before commercial use.' } },
    ],
  },
} as const
