"""Add info to pod

Revision ID: 760e7b59a669
Revises: 33af87c19aab
Create Date: 2024-09-20 07:58:18.708180

"""

from collections.abc import Sequence

import sqlalchemy as sa
import sqlmodel
import sqlmodel.sql.sqltypes
from alembic import op

# revision identifiers, used by Alembic.
revision: str = "760e7b59a669"
down_revision: str | None = "33af87c19aab"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("pod", sa.Column("pod_name", sqlmodel.sql.sqltypes.AutoString(), nullable=False))
    op.add_column(
        "pod", sa.Column("ssh_connect_cmd", sqlmodel.sql.sqltypes.AutoString(), nullable=False)
    )
    op.add_column("pod", sa.Column("gpu_name", sqlmodel.sql.sqltypes.AutoString(), nullable=False))
    op.add_column("pod", sa.Column("gpu_count", sqlmodel.sql.sqltypes.AutoString(), nullable=False))
    op.add_column("pod", sa.Column("cpu_name", sqlmodel.sql.sqltypes.AutoString(), nullable=False))
    op.add_column("pod", sa.Column("ram_total", sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("pod", "ram_total")
    op.drop_column("pod", "cpu_name")
    op.drop_column("pod", "gpu_count")
    op.drop_column("pod", "gpu_name")
    op.drop_column("pod", "ssh_connect_cmd")
    op.drop_column("pod", "pod_name")
    # ### end Alembic commands ###