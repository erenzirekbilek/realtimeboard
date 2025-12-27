import React from 'react';
import { Link } from 'react-router-dom';
import { Notification } from '../types/notification.types';
import { Badge } from '../../../components/common/Badge';

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead?: (id: string) => void;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onMarkAsRead,
}) => {
  return (
    <div
      className={`notification-item ${notification.read ? 'read' : 'unread'}`}
    >
      <div className="notification-content">
        <h4>{notification.title}</h4>
        <p>{notification.message}</p>
        <span className="notification-time">
          {new Date(notification.createdAt).toLocaleString()}
        </span>
      </div>
      <div className="notification-actions">
        <Badge variant={notification.type}>{notification.type}</Badge>
        {!notification.read && onMarkAsRead && (
          <button onClick={() => onMarkAsRead(notification.id)}>
            Mark as read
          </button>
        )}
        {notification.actionUrl && (
          <Link to={notification.actionUrl}>View</Link>
        )}
      </div>
    </div>
  );
};

