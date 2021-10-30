import React from "react";
import "./Notification.scss";

export enum NotificationType {
  Hidden = "hidden",
  Success = "is-tmtech",
  Failure = "is-danger",
}

interface NotificationProps {
  type: NotificationType;
  children: React.ReactNode;
}

function Notifcation({ type, children }: NotificationProps) {
  return type !== "hidden" ? (
    <div className={`notification ${type}`}>{children}</div>
  ) : null;
}

export default Notifcation;
