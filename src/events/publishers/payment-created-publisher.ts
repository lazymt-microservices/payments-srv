import { Subjects, Publisher, PaymentCreatedEvent } from '@lazymtlib/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
