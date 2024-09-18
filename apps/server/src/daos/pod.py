from uuid import UUID

from sqlmodel import select

from daos.base import BaseDao
from models.pod import Pod


class PodDao(BaseDao):
    def save(self, pod: Pod) -> Pod:
        existing_pod = self.find_by_executor_id(pod.executor_id)
        if existing_pod:
            for field_name, field_value in pod.dict().items():
                setattr(existing_pod, field_name, field_value)
            self.session.commit()
            self.session.refresh(existing_pod)
            return existing_pod
        else:
            self.session.add(pod)
            self.session.commit()
            self.session.refresh(pod)
            return pod

    def find_by_executor_id(self, executor_id: UUID) -> Pod | None:
        return self.session.exec(select(Pod).where(Pod.executor_id == executor_id)).first()

    def find_all(self) -> list[Pod]:
        return self.session.exec(select(Pod)).all()