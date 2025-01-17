"""Add user to Pod model

Revision ID: 233362b6ae78
Revises: be7476c8c0ee
Create Date: 2024-09-19 08:15:50.819519

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import sqlmodel
import sqlmodel.sql.sqltypes


# revision identifiers, used by Alembic.
revision: str = '233362b6ae78'
down_revision: Union[str, None] = 'be7476c8c0ee'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('pod', sa.Column('user_id', sa.Uuid(), nullable=False))
    op.create_foreign_key(None, 'pod', 'user', ['user_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'pod', type_='foreignkey')
    op.drop_column('pod', 'user_id')
    # ### end Alembic commands ###
