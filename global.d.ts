type EnMessages = typeof import("./app/messages/en.json")
type FaMessages = typeof import("./app/messages/fa.json")

declare interface InltMesages extends EnMessages, FaMessages { }