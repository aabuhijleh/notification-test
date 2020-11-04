export const callTemplate: Record<string, unknown> = {
  id: "bcvor1mkngckp",
  convId: null,
  type: "call",
  message: "Incoming audio call",
  origin: "Abdurrahman Abu-Hijleh",
  avatarURL:
    "https://openrainbow.com/api/avatar/5ae5c14e69b5bc0f474cce64?size=256&update=695fcd1c5f8bf8f15a2a93fdfc572266",
  infoTitle: null,
  infoMessage: null,
  callSubject: null,
  delay: 180000,
  delayTimeout: null,
  autoCloseAction: null,
  infoHandler: null,
  actions: [
    {
      choiceTitleLabel: null,
      focus: true,
      choiceVisible: false,
      name: "answer_audio",
      color: "green",
      icon: "mic",
      label: "Accept",
      choiceCloseLabel: null,
    },
    {
      choiceTitleLabel: null,
      focus: false,
      choiceVisible: false,
      name: "decline",
      color: "red",
      label: "Decline",
      choiceCloseLabel: null,
    },
    {
      choiceTitleLabel: "Quick answer",
      handler: null,
      focus: false,
      choiceVisible: false,
      name: "answerIM",
      label: "Send message",
      choiceCloseLabel: "Close",
      choice: [
        {
          id: "imCallYouRightBack",
          label: '"I\'ll call you right back."',
        },
        {
          id: "imSorryInAMeeting",
          label: '"Sorry, I\'m in a meeting right now."',
        },
        {
          id: "answerIM",
          label: "Other",
        },
      ],
    },
  ],
  iconPath: "https://web.openrainbow.com/rb/2.78.10/resources/svg_dist",
};

export const imTemplate: Record<string, unknown> = {
  id: "Psm7a-2380",
  convId: "da4ed8936079492b9a0d80dc11ceb7c5@openrainbow.com",
  type: "info",
  message: "Hello",
  origin: "Abdurrahman Abu-Hijleh says",
  avatarURL:
    "https://openrainbow.com/api/avatar/5ae5c14e69b5bc0f474cce64?size=256&update=695fcd1c5f8bf8f15a2a93fdfc572266",
  infoTitle: null,
  infoMessage: null,
  callSubject: null,
  delay: 5000,
  delayTimeout: null,
  autoCloseAction: null,
  actions: null,
  iconPath: "https://web.openrainbow.com/rb/2.78.10/resources/svg_dist",
};
